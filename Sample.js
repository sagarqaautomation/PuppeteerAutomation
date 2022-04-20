const puppeteer=require('puppeteer');

let config ={

	launchOptions:{
		headless:false,
        args: ['--use-gl=egl']
	}
} 

//Page Locaters
const login={
	email:'input[id="username"]',
	password:'input[id="password"]'
		}

puppeteer.launch(config.launchOptions).then(async browser=> {
 const page=await browser.newPage();
 await page.goto('https://app.hubspot.com/login');
 await page.waitFor(login.email);
 await page.type(login.email,"puppeteer");
 await page.type(login.password,"puppeteer");
 await page.screenshot({path:'loginpage.png',fullPage:true})
// if you want to generate pdf we need to run in headlessmode
 //await page.pdf({path:'loginpage.pdf'})
 await browser.close();

 
	
});