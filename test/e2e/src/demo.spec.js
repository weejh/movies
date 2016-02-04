// import {PageObjectWelcome} from './welcome.po.js'
// import {PageObjectSkeleton} from './skeleton.po.js'
// import {PageObjectHome} from './home.po.js'
import {PageObjectLogin} from './login.po.js'

describe('login page and home page', function() {
  // let poWelcome;
  // let poSkeleton;
  // let poHome
  let poLogin

  beforeEach(() => {
    // poSkeleton = new PageObjectSkeleton();
    // poWelcome = new PageObjectWelcome();
    // poHome = new PageObjectHome();
    poLogin = new PageObjectLogin()

    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  // it('should load the page and display the initial page title', () => {
  //   expect(poSkeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  // });

  it('should display title login page', () => {
    expect(poLogin.getHeader()).toBe('The Movie Diary');
  });

  it('should display text content', () => {
    expect(poLogin.getContent()).toBe('Take note of all the upcoming movies and add them to your wishlist.\nLog in to check out all the features!')
  })


  // it('should display header from home page', () => {
  //   expect(poHome.getHeader()).toBe('Home')
  // })
  // it('should automatically write down the fullname', () => {
  //   poWelcome.setFirstname('Rob');
  //   poWelcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
  //   browser.sleep(200);
  //   expect(poWelcome.getFullname()).toBe('ROB EISENBERG');
  // });

  // it('should show alert message when clicking submit button', () => {
  //   expect(poWelcome.openAlertDialog()).toBe(true);
  // });
  //
  // it('should navigate to users page', () => {
  //   poSkeleton.navigateTo('#/users');
  //   expect(poSkeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  // });
})
