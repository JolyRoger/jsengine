/**
 * Created with IntelliJ IDEA.
 * User: torquemada
 * Date: 09.10.13
 * Time: 14:15
 * To change this template use File | Settings | File Templates.
 */

$(function() {
    $('#stateInfo').html('Hello engine!')
    createGameContext()
})

var index = 1       // 0 - Init
var engineStarted = false
var stateList = []
var currentState = {stop: function() { console.info('fake stop')}}
var tick = 1000

function getInitState() {
    for(var i=0; i<stateList.length; i++) {
        if (stateList[i].name.toLowerCase() === 'init')
            return stateList[i]
    }
    return null
}
function getStateByName(stateName) {
    for(var i=0; i<stateList.length; i++) {
        if (stateList[i].name.toLowerCase() === stateName.toLowerCase())
            return stateList[i]
    }
    return null
}

function registerState(state) {
//    extend(state, State)
//    var newState = new state
    stateList.push(new state)
}

function go() {
    gotoNextState('Init')
}

function nextState() {
    if (stateList[index]) {
        gotoNextState(stateList[index++].name)
//        currentState.nextState = stateList[index++].name
    } else {
        index = 1
        nextState()
    }
}

var currentPlay

function gotoNextState(stateName) {
    clearInterval(currentPlay)
    currentState.stop()
    currentState.active = false
//    delete currentState.nextState
    var nextState = getStateByName(stateName)
    if (nextState === null) return
    currentState = nextState
    currentState.active = true
    currentState.start()
    currentPlay = setInterval(currentState.play, tick)
}

function halt() {
    clearInterval(currentPlay)
    currentState.stop()
    currentState.active = false
//    delete currentState.nextState
}


function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

function print() {

}