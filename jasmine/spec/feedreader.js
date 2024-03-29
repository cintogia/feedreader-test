/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
    (function() {
        /* This is our first test suite - a test suite just contains
         * a related set of tests. This suite is all about the RSS
         * feeds definitions, the allFeeds variable in our application.
         */
        describe("RSS Feeds", function() {

            /* This is our first test - it tests to make sure that the
             * allFeeds variable has been defined and that it is not
             * empty. Experiment with this before you get started on
             * the rest of this project. What happens when you change
             * allFeeds in app.js to be an empty array and refresh the
             * page?
             */

// Test runs by checking that allFeeds.length is not equal to 0
            it("are defined", function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            /* TODO: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a URL defined
             * and that the URL is not empty.
             */

// Test runs by checking that value.length of 'url' property is not equal to 0
            it("URLs are defined", function() {
                for (let i of allFeeds) {
                    expect(i.url).toBeDefined();
                    expect(i.url.length).not.toBe(0);
                }
            });

            /* TODO: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a name defined
             * and that the name is not empty.
             */

// Test runs by checking that value.length of 'name' property is not equal to 0
            it("names are defined", function() {
                for (let i of allFeeds) {
                    expect(i.name).toBeDefined();
                    expect(i.name.length).not.toBe(0);
                }
            });
        });

        /* TODO: Write a new test suite named "The menu" */
        describe("The menu", function() {
            /* TODO: Write a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
// Test checks if <body> contains .menu-hidden
            it("is hidden by default", function() {
                let body = $("body").hasClass("menu-hidden");
                expect(body).toBe(true);
            });
            /* TODO: Write a test that ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */

// Test checks if menu shows and hides on click by using click() function
// click() on .menu-icon-link -> check if <body> contains .menu-hidden
            it("displays and hides onclick", function() {
                let menuIcon = $(".menu-icon-link");
                menuIcon.click();
                let open = $("body").hasClass("menu-hidden");
                expect(open).toBe(false);
                menuIcon.click();
                let hide = $("body").hasClass("menu-hidden");
                expect(hide).toBe(true);
            });
        });

        /* TODO: Write a new test suite named "Initial Entries" */
        describe("Initial Entries", function() {
            /* TODO: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */

// Test checks if URLs have been loaded
// loads URL using 'beforeEach', looks then if .entry classes are greater than 0

            beforeEach(function(done) {
                loadFeed(0, done);
            });

            it("have loaded", function(done) {
                let entries = $(".entry").length;
                expect(entries).not.toBe(0);
                done();
            });
        });

        /* TODO: Write a new test suite named "New Feed Selection" */
        describe("New Feed Selection", function() {
            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */

// Test checks if loaded Feed Content changes
// loads two URLs using beforeEach, compares then content of both loaded feeds using .innerText method
            beforeEach(function(done) {
                loadFeed(0, function() {
                    firstFeed = $('.feed')[0].innerText;
                    loadFeed(2, function() {
                        secondFeed = $('.feed')[0].innerText;
                        done();
                    });
                });
            });

            it("actually changes content", function(done) {
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
        });
    })()
);
