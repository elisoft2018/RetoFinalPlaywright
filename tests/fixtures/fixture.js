import { test as base } from 'playwright-bdd';
import * as Pages from './pages';

const { UserLoginPage,
    UserHomePageInventory,
    UserHomePageCart,
    UserHomePageCheckout,
    UserHomePageSummaryShopping
} = Pages;

const createTestFunction = (PageClass) => async ({ page }, use) => {

    await use(new PageClass(page))
}

export const test = base.extend({

    userLoginPage: createTestFunction(UserLoginPage),
    userHomePageInventory: createTestFunction(UserHomePageInventory),
    userHomePageCart: createTestFunction(UserHomePageCart),
    userHomePageCheckout: createTestFunction(UserHomePageCheckout),
    userHomePageSummaryShopping: createTestFunction(UserHomePageSummaryShopping)

})

export const users = {
    validUser: { username: "standard_user", password: "secret_sauce" },
    lockedUser: { username: "locked_out_user", password: "secret_sauce" },
    invalidUser: { username: "fake_user", password: "wrong_pass" },
    emptyUserAndPassword: { username: "", password: "" },
};

export const personalData = {
    firstName: "Juan",
    lastName: "Pérez",
    postalCode: "12345",
};

