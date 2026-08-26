import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
const ResumePreviewController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResumePreviewController.url(options),
    method: 'get',
})

ResumePreviewController.definition = {
    methods: ["get","head"],
    url: '/app/resumes/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
ResumePreviewController.url = (options?: RouteQueryOptions) => {
    return ResumePreviewController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
ResumePreviewController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResumePreviewController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\ResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumePreviewController.php:13
 * @route '/app/resumes/preview'
 */
ResumePreviewController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResumePreviewController.url(options),
    method: 'head',
})
export default ResumePreviewController