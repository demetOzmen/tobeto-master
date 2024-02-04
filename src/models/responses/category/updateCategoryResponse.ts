export interface updateCategoryResponse<syncCourses, asyncCourses> {
    id: string;
    name: string;
    syncCourses: syncCourses[];
    asyncCourses: asyncCourses[];
}
