import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
const ResumeCreateController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResumeCreateController.url(options),
    method: 'get',
})

ResumeCreateController.definition = {
    methods: ["get","head"],
    url: '/app/resumes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
ResumeCreateController.url = (options?: RouteQueryOptions) => {
    return ResumeCreateController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
ResumeCreateController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResumeCreateController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Resume\Http\Controllers\ResumeCreateController::__invoke
 * @see app/Modules/Resume/Http/Controllers/ResumeCreateController.php:13
 * @route '/app/resumes/create'
 */
ResumeCreateController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResumeCreateController.url(options),
    method: 'head',
})
export default ResumeCreateController