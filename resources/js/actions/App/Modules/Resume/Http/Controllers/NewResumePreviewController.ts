import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
const NewResumePreviewController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NewResumePreviewController.url(options),
    method: 'get',
})

NewResumePreviewController.definition = {
    methods: ["get","head"],
    url: '/app/resumes/new-preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
NewResumePreviewController.url = (options?: RouteQueryOptions) => {
    return NewResumePreviewController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
NewResumePreviewController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NewResumePreviewController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\NewResumePreviewController::__invoke
 * @see app/Modules/Resume/Http/Controllers/NewResumePreviewController.php:13
 * @route '/app/resumes/new-preview'
 */
NewResumePreviewController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NewResumePreviewController.url(options),
    method: 'head',
})
export default NewResumePreviewController