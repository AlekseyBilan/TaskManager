var taskManagerAppCtrl = taskManagerApp.controller("taskManagerAppCtrl", function ($scope) {

    $scope.datepicker = false;
    $scope.tasks = taskManagerModel.read();
    $scope.currentArticle = {};

    $scope.url = "templates/admin.html";

    $scope.addNewArticle = function () {
        if ($scope.currentArticle.taskName) {
            taskManagerModel.addItem($scope.currentArticle.taskName, $scope.currentArticle.category, $scope.currentArticle.description, $scope.currentArticle.reminder);
            $scope.clearArticleForm();
        }
    };

    $scope.removeTask = function (articleId) {
        taskManagerModel.removeItem(articleId);
    };

    $scope.editTask = function (articleId, editTaskName, editCategory, editDescription, editReminder) {
        taskManagerModel.updateItem(articleId, editTaskName, editCategory, editDescription, editReminder);
    };

    $scope.clearArticleForm = function () {
        $scope.currentArticle.taskName = '';
        $scope.currentArticle.category = '';
        $scope.currentArticle.remainder = 'Setup reminder';
        $scope.currentArticle.description = '';
    };

});

