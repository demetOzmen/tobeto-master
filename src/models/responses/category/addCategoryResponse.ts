export interface addCategoryResponse <syncCourses,asyncCourses> {
  name: string;
  syncCourses: syncCourses[];
  asyncCourses: asyncCourses[];
}
