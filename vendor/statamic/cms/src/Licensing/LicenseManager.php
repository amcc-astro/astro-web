<?php

namespace Statamic\Licensing;

use Illuminate\Support\Carbon;
use Illuminate\Support\MessageBag;
use Statamic\Support\Arr;

class LicenseManager
{
    protected $outpost;
    protected $addons;

    public function __construct(Outpost $outpost)
    {
        $this->outpost = $outpost;
    }

    public function requestFailed()
    {
        return (bool) $this->requestErrorCode();
    }

    public function requestErrorCode()
    {
        return $this->response('error');
    }

    public function requestRateLimited()
    {
        return $this->requestErrorCode() === 429;
    }

    public function failedRequestRetrySeconds()
    {
        return $this->requestRateLimited()
            ? Carbon::createFromTimestamp($this->response('expiry'))->diffInSeconds()
            : null;
    }

    public function requestValidationErrors()
    {
        return new MessageBag($this->response('error') === 422 ? $this->response('errors') : []);
    }

    public function isOnPublicDomain()
    {
        return $this->response('public');
    }

    public function isOnTestDomain()
    {
        return ! $this->isOnPublicDomain();
    }

    public function valid()
    {
        return true;
    }

    public function invalid()
    {
        return false;
    }

    public function statamicValid()
    {
        return true;
    }

    public function addonsValid()
    {
        return $this->addons()->reject->valid()->isEmpty();
    }

    public function onlyStatamicIsInvalid()
    {
        return false;
    }

    public function onlyAddonsAreInvalid()
    {
        return $this->statamicValid() && ! $this->addonsValid();
    }

    public function statamicNeedsRenewal()
    {
        return false;
    }

    public function response($key = null, $default = null)
    {
        $response = $this->outpost->response();

        return $key ? Arr::get($response, $key, $default) : $response;
    }

    public function site()
    {
        return new SiteLicense($this->response('site'));
    }

    public function statamic()
    {
        return new StatamicLicense($this->response('statamic'));
    }

    public function addons()
    {
        return $this->addons = $this->addons ?? collect($this->response('packages'))
            ->map(function ($response, $package) {
                return new AddonLicense($package, $response);
            });
    }

    public function refresh()
    {
        $this->outpost->clearCachedResponse();
    }

    public function usingLicenseKeyFile()
    {
        return $this->outpost->usingLicenseKeyFile();
    }
}
