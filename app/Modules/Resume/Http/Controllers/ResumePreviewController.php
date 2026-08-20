<?php

declare(strict_types=1);

namespace App\Modules\Resume\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Shared\Http\Responders\PageResponder;
use Inertia\Response;

final class ResumePreviewController extends Controller
{
    public function __invoke(): Response
    {
        return PageResponder::render('modules/resume/pages/Preview');
    }
}