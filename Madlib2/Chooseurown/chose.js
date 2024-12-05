  let user = {
    name: prompt('enter a name'),
    friend: prompt('enter a friends name'),
    age: Number(prompt('enter an age')),
    job: prompt('enter your job'), 
    food: prompt('enter a breakfastfood you like'),

};
console.log(`You see your friend, ${user.friend} walking down the street its Monday morning and you have work in 4 hours.`)
let turning1 = prompt('Do you say hi to your friend. (Y/N)')
let yes = ('Y');
let no = ('N');

if (turning1 === yes) {
    console.log(`Your friend, ${user.friend} greets you back and starets to tell you about a strange object he saw this morning.`)
    let turning11 = prompt(`${user.friend} seems to be prpearing to go on a tangent do you continue to hear them out? (Y/N)`)
    if (turning11 === yes) {
        console.log(`Your friend, ${user.friend} has been talking for the past 20 minutes about JFK conspiracy theories and you hear them begin another tanget. Starting with my way of thinking...`)
        let turning12 = prompt('Do you again want to hear him out? (Y/N)')
            if (turning12 === yes) {
                console.log('To my way of thinking, there is every bit as much evidence for texistence of UFOs as there is for the existence of God. Probably fa more. At least in the case of UFOs there have been countless tapedand filmed and, by the way, unexplained sightings from all over the world, along with documented radar evidence seen by experienced military and civilian radar operators... Congrats your stuck')
            }else
            console.log('You turn away after saying goobye and after around 3 steps you hear a scream followed by a sound that sounds simliar to a airplane takeing off.')

        
    } else {
        console.log(`Your friend, ${user.friend} understands that your busy as a ${user.job} and says they'll talk to you later cause it was crazy what they saw.`)
        let turning21 = prompt(`As you walk down the street a gust of wind blows into your face and some papers sitting on a tables fly towards you do you grab one the flyers(Y/N)`)
            if (turning21 === yes) {
                console.log(`To your suprise the flyer says ${user.name} you have been invited to the World's Banquet with large block letter and a guide to accept underneath and as you begin the section saying how to accept you feel a warmth and begin to see all white.`)

            } else {
                console.log(`To your suprise the flyers on the ground say nothing in fact it looks like a bunch of copy paper but and you see the person sitting at the table giving you eyes`)
            }
        
    }
} else {
    console.log(` You decide to ignore ${user.friend} and continue with your errands.`)
    let turning3 = prompt(`You see an orange and white colored ${user.food} popup shop do you stop in? (Y/N) `)
    if (turning3 === no) {
        console.log(`You decide againist it and start to head home and on the way you see ${user.age} Hondas all the same oragne color driving in a line then an orange watch billboard saying it not too late for ${user.friend}`)
        let turning32 = prompt(`when you make it home a package is at your door from ${user.friend} to you. Do you open it?(Y/N)`)
            if (turning32 === yes) {
                console.log(`Inside are two vintage-looking mechanical watch watches one orange and the other white.The white one seems to be a standard metal watch with two hands and dial on the side to adjust the hands. The orange watch was quite peciular thought it had just one hand and an out of place electronic display in the middle that says ${(3 * (user.age -1 ))}.`)
            } else{
                console.log(`You take the package inside and you beging to make some food when you hear a knock and when you open the door you see ${user.friend} holding a orange box of ${user.food} from the popup shop and on thier wrist is a shiny white vintage-looking mechanical watch`)
            }
    } else{
        console.log(`You head into the popup shop and inside to your suprise you see ${user.friend} and they are eating some ${user.food}` )
        let turning33 = prompt(`Looking a bit closer ${user.friend} seems to look a bit older and you notice two odd lokking watchs on thier hands do you head over? (Y/N)`)
            if (turning33 === yes) {
                console.log(`${user.friend} sees you and looks suprised and says wow I guess I wasn't interesting enough huh and hands you a package and wishes you better luck than him and then you feel a warmth`)
            }  else{
                console.log(`You decide to get some food first and head to the counter and as you walk towards the counter you hear someone call out ${user.name}I havent seen you since you were ${user.age} and as you turn you feel a thud hit your chest and in your hand is a small package from ${user.friend}`)
            }

    }
}