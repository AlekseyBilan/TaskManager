var taskManagerModel = (function () {

    var _data = [];

    function _addItem( taskName, category, description, reminder) {
        _data.push({
            id: new Date().getTime(),
            taskName: taskName,
            category: category,
            description: description,
            reminder: reminder,
            date: new Date().getTime()
        });
        _save();
    }

    function _removeItem(id) {
        _data.forEach(function (e, index) {
            if (e.id == id) {
                _data.splice(index, 1);
            }
        });
        _save();
    }

    function _updateItem(id, taskName, category, description,  reminder) {
        _data.forEach(function (e, index) {
            if (e.id == id) {
                if (_data[index].description != description) {
                    _data[index].description = description;
                }
                if (_data[index].category != category) {
                    _data[index].category = category;
                }
                if (_data[index].taskName != taskName) {
                    _data[index].taskName = taskName;
                }
                if (_data[index].reminder != reminder) {
                    _data[index].reminder = reminder;
                }
            }
        });
        _save();
    }

    function _save() {
        window.localStorage["tasks"] = JSON.stringify(_data, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
    }

    function _read() {
        var temp = window.localStorage["tasks"];
        if (!temp) _data = [];
        else _data = JSON.parse(temp);
        _data.forEach(function (e, index) { //todo fix it
            _data[index].editTaskName = _data[index].taskName;
            _data[index].editCategory = _data[index].category;
            _data[index].editDescription = _data[index].description;
            _data[index].editReminder = _data[index].reminder;
        });
        return _data;
    }

    return {
        addItem: _addItem,
        updateItem: _updateItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    };
})();