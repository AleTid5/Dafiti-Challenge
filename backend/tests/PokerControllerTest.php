<?php
declare(strict_types=1);
namespace Dafiti\Tests;

use Dafiti\Controllers\PokerController as Poker;
use PHPUnit\Framework\TestCase;

class PokerControllerTest extends TestCase
{
    public function testStraights() : void
    {
        $result = Poker::isStraight([2, 3, 4, 5, 6]);
        $this->assertEquals(true, $result, "2, 3, 4, 5, 6");

        $result = Poker::isStraight([14, 5, 4, 2, 3]);
        $this->assertEquals(true, $result, "14, 5, 4, 2, 3");

        $result = Poker::isStraight([2, 3, 7, 5, 6]);
        $this->assertEquals(false, $result, "2, 3, 7, 5, 6");

        $result = Poker::isStraight([7, 7, 12, 11, 3, 4, 14]);
        $this->assertEquals(false, $result, "7, 7, 12, 11, 3, 4, 14");

        $result = Poker::isStraight([7, 3, 2]);
        $this->assertEquals(false, $result, "7, 3, 2");

        $result = Poker::isStraight([14, 5, 4, 2, 3, 15]);
        $this->assertEquals(false, $result, "14, 5, 4, 2, 3, 15");
    }
}