<?php
namespace Dafiti\Traits;

use Exception;

trait FunctionalTrait
{
    /**
     * @param $comparison
     * @param String|null $message
     * @throws Exception
     */
    protected static final function assertOrFail($comparison, String $message = null) : void
    {
        if (! $comparison) throw new Exception($message);
    }
}