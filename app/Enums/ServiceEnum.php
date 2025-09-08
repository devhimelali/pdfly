<?php

namespace App\Enums;

enum ServiceEnum: string
{
    case MERGE_PDF = 'merge_pdf';
    case SPLIT_PDF = 'split_pdf';
    case PDF_TO_PDF = 'pdf_to_pdf';
    case JPG_TO_PDF = 'jpg_to_pdf';
    case ROTATE_PDF = 'rotate_pdf';
    case COMPRESS_PDF = 'compress_pdf';
    case WORD_TO_PDF = 'word_to_pdf';
    case POWERPOINT_TO_PDF = 'powerpoint_to_pdf';

    public function label(): string
    {
        return match ($this) {
            self::MERGE_PDF => 'Merge PDF',
            self::SPLIT_PDF => 'Split PDF',
            self::PDF_TO_PDF => 'PDF to PDF',
            self::JPG_TO_PDF => 'JPG to PDF',
            self::ROTATE_PDF => 'Rotate PDF',
            self::COMPRESS_PDF => 'Compress PDF',
            self::WORD_TO_PDF => 'Word to PDF',
            self::POWERPOINT_TO_PDF => 'Powerpoint to PDF',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::MERGE_PDF => '#1E3A8A',
            self::SPLIT_PDF => '#B45309',
            self::PDF_TO_PDF => '#374151',
            self::JPG_TO_PDF => '#065F46',
            self::ROTATE_PDF => '#92400E',
            self::COMPRESS_PDF => '#6B21A8',
            self::WORD_TO_PDF => '#2563EB',
            self::POWERPOINT_TO_PDF => '#C2410C',
        };
    }

    public function bgColor(): string
    {
        return match ($this) {
            self::MERGE_PDF => '#DBEAFE',
            self::SPLIT_PDF => '#FEF3C7',
            self::PDF_TO_PDF => '#F3F4F6',
            self::JPG_TO_PDF => '#D1FAE5',
            self::ROTATE_PDF => '#FFEDD5',
            self::COMPRESS_PDF => '#F3E8FF',
            self::WORD_TO_PDF => '#DBEAFE',
            self::POWERPOINT_TO_PDF => '#FFEDD5',
        };
    }
}
