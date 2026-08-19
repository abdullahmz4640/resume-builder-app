<?php

declare(strict_types=1);

use App\Modules\Resume\Http\Controllers\ResumeCreateController;
use Illuminate\Support\Facades\Route;

Route::get('/app/resumes/create', ResumeCreateController::class)
    ->name('app.resumes.create');