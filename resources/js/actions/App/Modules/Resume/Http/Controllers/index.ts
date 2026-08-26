import ResumeCreateController from './ResumeCreateController'
import ResumePreviewController from './ResumePreviewController'
const Controllers = {
    ResumeCreateController: Object.assign(ResumeCreateController, ResumeCreateController),
ResumePreviewController: Object.assign(ResumePreviewController, ResumePreviewController),
}

export default Controllers