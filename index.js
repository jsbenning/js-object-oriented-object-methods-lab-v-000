function BoardMember(name, homeState, training){
  this.name = name,
  this.homeState = homeState,
  this.training = training,
  const veto = function(){
    return "No, I must disagree"
  }
}