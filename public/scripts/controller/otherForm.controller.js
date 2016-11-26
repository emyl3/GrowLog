angular.module('growLogApp')
       .controller('OtherFormController', OtherFormController);

function OtherFormController($http, locationService) {
  var otherForm = this;
  console.log('OtherFormController loaded');

  locationService.getLocations().then(function(response) {
    otherForm.locations = response;
    console.log(response);
  });

  otherForm.addTask = function(task) {
    console.log('task', task);
    var id = task.id;

    var data = {
      location_id: task.location.id,
      type: 'other',
      assigndate: moment(task.date).format('L'),
      title: task.title,
      comments: task.comments
    };

    $http.post('/activity', data);

    // empty form after clicking 'Add task'
    otherForm.task = '';
  }, function(error) {
    console.log('Error posting request', error);
  };
}
