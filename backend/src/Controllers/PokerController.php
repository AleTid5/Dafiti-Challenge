<?php
declare(strict_types=1);
namespace Dafiti\Controllers;

use Dafiti\Models\Poker;
use Exception;

final class PokerController extends Controller
{
    /**
     * Valida que un array de números sea una escalera
     * @param array $cards
     * @return bool
     */
    public static final function isStraight(array $cards) : bool
    {
        $status = true;
        try {
            self::assertOrFail(count($cards) >= 5 && count($cards) <= 7);
            $cards = array_unique($cards); // Remuevo duplicados
            self::assertOrFail(self::isAValidStraight($cards));
        } catch (Exception $e) {
            $status = ! $status;
        } finally {
            return $status;
        }
    }

    /**
     * Valida que un array de números cumpla la condición necesaria para ser una escalera
     * @param array $cards
     * @return bool
     */
    private static final function isAValidStraight(array $cards) : bool
    {
        $status = true;
        try {
            array_map('self::validateCard', $cards);
            self::pushAndSort($cards);
            self::compareCards($cards);
            self::assertOrFail(Poker::getStraightMoves() >= 4);
        } catch (Exception $e) {
            $status = ! $status;
        } finally {
            return $status;
        }
    }

    /**
     * Valida que la carta recibida sea válida
     * @param int $card
     * @throws Exception
     */
    private static final function validateCard(int $card) : void
    {
        self::assertOrFail($card >= 2 && $card <= 14);
    }

    /**
     * Agrega la carta "1" al mazo en caso de existir un "AS"
     * @param $cards
     */
    private static final function pushAndSort(&$cards) : void
    {
        try {
            self::assertOrFail(in_array(14, $cards));
            array_push($cards, 1);
        } catch (Exception $e) {
        } finally {
            sort($cards); // Ordeno ascendente
        }
    }

    /**
     * Compara carta a carta para buscar una escalera. Si en algun momento la escalera se cae, se iniciliza el contador.
     * @param array $cards
     */
    private static final function compareCards(array $cards) : void
    {
        Poker::initializeStraightMoves();

        foreach ($cards as $k => $card) {
            if ($k + 1 !== count($cards)) {
                try {
                    self::assertOrFail($card + 1 === $cards[$k + 1] || Poker::getStraightMoves() >= 4);
                    Poker::incrementStraightMoves();
                } catch (Exception $e) {
                    Poker::initializeStraightMoves();
                }
            }
        }
    }
}