import ResumeCreateController from './ResumeCreateController'
import ResumePreviewController from './ResumePreviewController'
import NewResumePreviewController from './NewResumePreviewController'
const Controllers = {
    ResumeCreateController: Object.assign(ResumeCreateController, ResumeCreateController),
ResumePreviewController: Object.assign(ResumePreviewController, ResumePreviewController),
NewResumePreviewController: Object.assign(NewResumePreviewController, NewResumePreviewController),
}

export default Controllers