<?php
namespace Dafiti\Models;

class Poker
{
    private static $validStraightMoves = 0;

    public static final function initializeStraightMoves() : void
    {
        self::$validStraightMoves = 0;
    }

    public static final function incrementStraightMoves() : void
    {
        self::$validStraightMoves++;
    }

    public static final function getStraightMoves() : int
    {
        return self::$validStraightMoves;
    }
}