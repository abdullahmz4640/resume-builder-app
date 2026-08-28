<?php

declare(strict_types=1);

use App\Modules\Resume\Http\Controllers\NewResumePreviewController;
use App\Modules\Resume\Http\Controllers\ResumeCreateController;
use App\Modules\Resume\Http\Controllers\ResumePreviewController;
use Illuminate\Support\Facades\Route;

Route::get('/app/resumes/create', ResumeCreateController::class)
    ->name('app.resumes.create');

Route::get('/app/resumes/preview', ResumePreviewController::class)
    ->name('app.resumes.preview');

Route::get('/app/resumes/new-preview', NewResumePreviewController::class)
    ->name('app.resumes.new-preview');
