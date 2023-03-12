let result = document.querySelector(".result"),
btn = document.querySelector("button"),
input = document.querySelector("input")

console.log(result)
btn.addEventListener("click",()=>{
    let name = input.value
    let jokes = [
        `I'm ${name} ,i got a job at a zoo feeding giraffes but I was fired because I wasn’t up to it.`,
        `${name} is a bus driver that circles Big Ben in London. He works around the clock.`,
        `My name is ${name} ,I got fired as a yoga instructor.  And I bent over backwards for those people!`,
        `I'm the author ${name} and , I didn’t like my job as a waiter. But at least I was putting food on the table.`,
        `HR ${name}: “What’s your biggest weakness?`,
        `Boss ${name} to employees: ‘We will continue to have these meetings every single day until I work out why no work is being done’!`,
        `My boss is ${name} very easygoing. He told me not to think of him as the boss, rather, think of him as a friend who is never wrong.`,
        `${name} gave a great 10-minute business speech yesterday. The only problem was it took him an hour to deliver it.`,
        `My friend ${name} loves a bargain, she’s always itching to get back to the flea market.`,
        `My boss ${name} asked me to roundup 17 employees pronto. So I said, “20.`
    ]
    let random = Math.floor(Math.random() * jokes.length)
    result.textContent = ""
    result.append(jokes[random])
})