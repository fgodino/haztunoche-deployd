
protect('sites');
protect('friends');
protect('events');
protect('role');
protect('timeline');
protect('activity');
protect('petitionsFrom');
protect('petitionsTo');

this.role = 'user';
//this.birthdate = new Date(this.birthdate);

dpd.timeline.post({user : this.id}, function(timeline, error){
    cancelIf(error);
    this.timeline = timeline.id;
});

