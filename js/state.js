/**
 * Created with IntelliJ IDEA.
 * User: torquemada
 * Date: 09.10.13
 * Time: 13:21
 * To change this template use File | Settings | File Templates.
 */

function State() {
    this.active = false
    this.start = function() {
        console.log('super start')
    }
    this.play = function() {
        console.log('super play')
    }
    this.stop = function() {
        console.log('super stop')
    }
}

