<?php

namespace App\Enums;

enum StatusEnum: string
{
    case PROCESSING = 'processing';
    case SUCCESS = 'success';
    case FAILED = 'failed';
    case DELETED = 'deleted';

    public function label(): string
    {
        return match ($this) {
            self::PROCESSING => 'Processing',
            self::SUCCESS => 'Success',
            self::FAILED => 'Failed',
            self::DELETED => 'Deleted',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::PROCESSING => '#B45309',
            self::SUCCESS => '#166534',
            self::FAILED => '#991B1B',
            self::DELETED => '#6B7280',
        };
    }

    public function bgColor(): string
    {
        return match ($this) {
            self::PROCESSING => '#FEF3C7',
            self::SUCCESS => '#DCFCE7',
            self::FAILED => '#FEE2E2',
            self::DELETED => '#F3F4F6',
        };
    }
}
