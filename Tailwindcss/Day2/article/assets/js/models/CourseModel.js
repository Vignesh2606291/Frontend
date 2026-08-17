/**
 * CourseModel.js - MVC Model for Course Curriculum & Progress Tracking
 */

class CourseModel {
  constructor() {
    this.modules = window.AppConfig.curriculum || [];
    this.completedLessons = this.loadCompletedLessons();
    this.activeFilter = 'all';
    this.searchQuery = '';
  }

  loadCompletedLessons() {
    try {
      const stored = localStorage.getItem('devscript_completed_lessons');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  saveCompletedLessons() {
    try {
      localStorage.setItem('devscript_completed_lessons', JSON.stringify(this.completedLessons));
    } catch (e) {
      console.warn("LocalStorage access restricted", e);
    }
  }

  toggleLessonCompletion(moduleId, lessonIndex) {
    const key = `${moduleId}_${lessonIndex}`;
    this.completedLessons[key] = !this.completedLessons[key];
    this.saveCompletedLessons();
    return this.completedLessons[key];
  }

  isLessonCompleted(moduleId, lessonIndex) {
    return !!this.completedLessons[`${moduleId}_${lessonIndex}`];
  }

  getAllModules() {
    return this.modules;
  }

  getFilteredModules() {
    if (!this.searchQuery) return this.modules;
    const q = this.searchQuery.toLowerCase();
    return this.modules.filter(m => 
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.topics.some(t => t.toLowerCase().includes(q))
    );
  }

  getProgressStats() {
    let totalTopics = 0;
    let completedTopics = 0;
    this.modules.forEach(m => {
      m.topics.forEach((_, idx) => {
        totalTopics++;
        if (this.isLessonCompleted(m.moduleNumber, idx)) {
          completedTopics++;
        }
      });
    });
    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    return { totalTopics, completedTopics, percentage };
  }
}

window.CourseModel = CourseModel;
