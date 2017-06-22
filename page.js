const funFacts = [
'Banging your head against a wall burns 150 calories an hour.',
'In the UK, it is illegal to eat mince pies on Christmas Day!',
'Pteronophobia is the fear of being tickled by feathers!',
'When hippos are upset, their sweat turns red.',
'A flock of crows is known as a murder.',
'“Facebook Addiction Disorder” is a mental disorder identified by Psychologists.',
'The average woman uses her height in lipstick every 5 years.',
'29th May is officially "Put a Pillow on Your Fridge Day".',
'Cherophobia is the fear of fun.',
'Human saliva has a boiling point three times that of regular water.',
'If you lift a kangaroo’s tail off the ground it can’t hop.',
'Bananas are curved because they grow towards the sun.',
'Billy goats urinate on their own heads to smell more attractive to females.',
'The person who invented the Frisbee was cremated and made into frisbees after he died!',
'This club is poppin\'!',
'During your lifetime, you will produce enough saliva to fill two swimming pools.',
'If Pinokio says “My Nose Will Grow Now”, it would cause a paradox. Details here.',
'Polar bears can eat as many as 86 penguins in a single sitting. (If they lived in the same place)',
'King Henry VIII slept with a gigantic axe beside him.',
'Movie trailers were originally shown after the movie, which is why they were called “trailers”.',
'Every day there are 6 years worth of videos being published on YouTube.',
'Heart attacks are more likely to happen on a Monday.',
'If you consistently fart for 6 years & 9 months, enough gas is produced to create the energy of an atomic bomb!',
'In 2015, more people were killed from injuries caused by taking a selfie than by shark attacks.',
'The top six foods that make your fart are beans, corn, bell peppers, cauliflower, cabbage and milk!',
'There is a species of spider called the Hobo Spider.',
'A lion’s roar can be heard from 5 miles away!',
'A toaster uses almost half as much energy as a full-sized oven.',
'Cows have best friends when they get stressed out when they are separated.',
'You cannot snore and dream act the same time.',
'The following can be read forward and backwards: Do geese see God?',
'A baby octopus is about the size of a flea when it is born.',
'A sheep, a duck and a rooster were the first passengers in a hot air balloon.',
'In Uganda, 50% of the population is under 15 years of age.',
'Hitler’s mother considered abortion but the doctor persuaded her to keep the baby.',
'Arab women can initiate a divorce if their husbands don’t pour coffee for them.',
'Recycling one glass jar saves enough energy to watch TV for 3 hours.',
'Smearing a small amount of dog feces on an insect bite will relieve the itching and swelling.',
'Poyu Chen aka applefreak.',
'Facebook, Skype and Twitter are all banned in China.',
'I love testing.',
'Saudi Arabia imports camels from Australia',
'Elephants can control their private parts like a second trunk.',
'About 8,000 Americans are injured by musical instruments each year.',
'The French language has seventeen different words for ‘surrender’.',
'Nearly three percent of the ice in Antarctic glaciers is penguin urine.',
'Penn loves ping pong.',
'A crocodile can’t poke its tongue out :p',
'Deep clone it, Peter.',
'A small child could swim through the veins of a blue whale.',
'Bin Laden’s death was announced on 1st May 2011. Hitler’s death was announced on 1st May 1945.',
'J.K. Rowling chose the unusual name ‘Hermione’ so young girls wouldn’t be teased for being nerdy!',
'Winner winner Chris Dobler\'s dinner',
'Kyle was on the Bachelorette ;)',
'The Pokémon Hitmonlee and Hitmonchan are based off of Bruce Lee and Jackie Chan.',
'An arctophile is a person who collects, or is very fond of teddy bears.',
'Pirates wore earrings because they believed it improved their eyesight.',
'Los Angeles’s full name is “El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula.”',
'Brett brews beer. But first, Soylent.',
'Octopuses have four pairs of arms.',
'In England, in the 1880’s, “Pants” was considered a dirty word.',
'Sanitise your inputs.',
'Every human spent about half an hour as a single cell.',
'Under the hood is good.',
'Unlike many other big cats, snow leopards are not aggressive towards humans. There has never been a verified snow leopard attack on a human being.',
'The first alarm clock could only ring at 4am.',
'Birds don’t urinate.',
'Dying is illegal in the Houses of Parliaments – This has been voted as the most ridiculous law by the British citizens.',
'The most venomous jellyfish in the world is named the Irukandji and is smaller than your fingernail.',
'The 20th of March is known as Snowman Burning Day!',
'Jon has luscious locks.',
'Panphobia is the fear of everything… which is a pretty unlucky phobia to have.',
'Ian is a patient and polite driver.',
'The front paws of a cat are different from the back paws. They have five toes on the front but only four on the back.',
'A company in Taiwan makes dinnerware out of wheat, so you can eat your plate!',
'The average person walks the equivalent of twice around the world in a lifetime.',
'Jerry is wet.'
];

// Append a random quote to the fact-box
// Change the quote to a random color

// const colors = [
// 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
// 'silver', 'teal',
// ];


const colors = ['maroon', '#5ecc62' , '#00ad45' , '#2ad2c9' , '#3369e7' , '#00aeff' , '#003666' , '#54493f' , '#eb2226' , '#d52685' , '#f66733' , '#b7295a' , '#ea4c89' , '#faa918' , '#8549ba'];

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    let text = document.createElement('p');
    const factBox = document.getElementById('fact-box');
    factBox.appendChild(text);
        text.innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)];
    setInterval(function() {
        text.innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 10000);
    let pos = -440;
    document.getElementById('cat').style.left = pos + 'px';
    setInterval(function() {
        pos += 10;
        document.getElementById('cat').style.left = pos + 'px';
        console.log('body width', document.body.style.width);
        if (document.getElementById('cat').style.left === '1200px') {
            console.log('consition works');
            pos = -440;
            document.getElementById('cat').style.left = pos + 'px';
        }
    }, 100);
    // function walkingLeft() {
    //     pos -= 10;
    //     document.getElementById('cat').style.left = pos + 'px';
    // }
    // function walkingRight() {
    //     pos += 10;
    //     document.getElementById('cat').style.left = pos + 'px';
    // }
});

// $(function() {
//     $('body').css( 'background-color', colors[Math.floor(Math.random() * colors.length)] );
//     let text = document.createElement('p');
//     text.innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)]
//     $('#fact-box').append(text);
// });

// setTimeout => 
// 
