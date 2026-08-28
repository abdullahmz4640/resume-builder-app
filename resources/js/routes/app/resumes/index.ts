import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/app/resumes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
export const preview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(options),
    method: 'get',
})

preview.definition = {
    methods: ["get","head"],
    url: '/app/resumes/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
preview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
preview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preview.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
export const newPreview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newPreview.url(options),
    method: 'get',
})

newPreview.definition = {
    methods: ["get","head"],
    url: '/app/resumes/new-preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
newPreview.url = (options?: RouteQueryOptions) => {
    return newPreview.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
newPreview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newPreview.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
newPreview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newPreview.url(options),
    method: 'head',
})
const resumes = {
    create: Object.assign(create, create),
preview: Object.assign(preview, preview),
newPreview: Object.assign(newPreview, newPreview),
}

export default resumes