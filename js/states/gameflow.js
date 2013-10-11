/**
 * Created with IntelliJ IDEA.
 * User: torquemada
 * Date: 10.10.13
 * Time: 14:29
 * To change this template use File | Settings | File Templates.
 */

function Init() {
    this.name = 'Init'
    this.start = function() {
        console.log('Init started')
    }
    this.play = function() {
        $('#stateInfo').html('Init played')
//        if (this.nextState) {
//            gotoNextState(this.nextState)
//        }
    }
    this.stop = function() {
        console.log('Init stopped')
    }
}

function State1() {
    this.name = 'State1'
    this.start = function() {
        console.log('State1 started')
    }
    this.play = function() {
        $('#stateInfo').html('State1 played')
//        if (this.nextState) {
//            gotoNextState(this.nextState)
//        }
    }
    this.stop = function() {
        console.log('State1 stopped')
    }
}

function State2() {
    this.name = 'State2'
    this.start = function() {
        console.log('State2 started')
    }
    this.play = function() {
        $('#stateInfo').html('State2 played')
//        if (this.nextState) {
//            gotoNextState(this.nextState)
//        }
    }
    this.stop = function() {
        console.log('State2 stopped')
    }
}

function State3() {
    this.name = 'State3'
    this.start = function() {
        console.log('State3 started')
    }
    this.play = function() {
        $('#stateInfo').html('State3 played')
//        if (this.nextState) {
//            gotoNextState(this.nextState)
//        }
    }
    this.stop = function() {
        console.log('State3 stopped')
    }
}


function Finish() {
    this.name = 'Finish'
    this.start = function() {
        console.log('Finish started')
    }
    this.play = function() {
        $('#stateInfo').html('Finish played')
//        if (this.nextState) {
//            gotoNextState(this.nextState)
//        }
    }
    this.stop = function() {
        console.log('Finish stopped')
    }
}