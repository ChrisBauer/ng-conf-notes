- [github.com/Elecash/ng-conf-testing](github.com/Elecash/ng-conf-testing)
- github cards - project as an example app to go over for the workshop
- Testing setup: angular 2 packages, karma*, remap-istanbul(coverage), jasmine
- Karma files : nodes_modules/zones.js/dist/(zone.js, jasmine-patch, async-test,fake-async)

Executing the test using npm:

    "coverage": "http-server -c-1 -o -s -p 9875 ./coverage,
    "scripts": {
        "postinstall": "typings install",
        "start": "npm run build && http-server -c-1 -o -s -p 8875 .",
        "dev": "npm run test && http-server -c-1 -o -s -p 8875 .",
        "build": "rm -rf dist && tsc -p src",
        "pretest": "npm run build",
        "test": "karma start karma.conf.js",
        "posttest": "node_modules/.bin/remap-istanbul -i coverage/coverage-final.json -o coverage -t html",
     }

In order to use Angular 2 components in our tests we need to include our depensdencies as we do in our application using bootstrap.  We will be using Dependency Injection to resolve all references.  In order to do this we are going to use; beforeEachProviders, inject, and injectAsync - all imported from 'angular2/testing'

Async tests using injectAsync

    ...
    it('should validate stuff async', injectAsync([UserService], (service) => {
        service.stuff = 1234;

        return service.isValidStuffAsync().then((result) =>{
            expect(result).toBe(true);
        });
    }), 3000); // timeout 3 sec
    Mocking
    class MockingService extends LoginService{
        ...
    }

    describe('bla', () => {
        beforeEachProviders(() => {
            provide(LoginService, {useClass: MockingService}), UserService);
        });

        it('should greet', injectAsync([UserService], (service) => {
            return service.getGreeting().then((greeting) => {
                expect(greeting).toEqual('Welcome!');
            });
        });
    })
    
Another option is the fakeAsync utility of Angular 2 testing. fakeAsync wraps the entire test and it uses a zone to listen when setTimeout, setCallback... are registered. Instead of invoking them asynchronously, it will simulate moving time forward and invoke the functions immediately.

    describe('with fake async', () => {
        beforeeachProviders(() => [LoginService, UserService]);

        it('should greet with fakeasync', inject([UserService], fakeAsync((service) => {
            var greeting;
            service.getGreeting().then(value) => {
                greeting = value;
            });

            tick(2000);

            expect(greeting).toEqual('Login failure!');

        })));
    });
    
##### Testing Components

Angular 2 testing provides a TestComponentBuilder utility class.  The TestComponentBuilder always returns asynchronously, so always use injectAsync with it.

    import {..., injectAsync, TestComponentBuilder, beforeEachProviders} from "angular2/testing";

    describe('greeting component tests', () => {
        beforeEachProviders(() => {
            provide(LoginService, {useClass: MockLoginService}),
            UserService
        });

        it('should ask for PIN', injectAsync([TestComponentBuilder], (tcb) {
            return tcb.createAsync(GreetingComponent).then((fixture) => {
                fixture.detectChanges(); // you can detect changes on the fixture provided by TestComponentBuilder

                var compiled = fixture.debugElement.nativeElement;

                expect(compiled).toContainText("Enter PIN");
                expect(compiled.querySelector("h3")).toHaveText("Status: Enter PIN!!");

                // you can also modify the properties of the component directly:
                fixture.debugElement.componentInstance.greeting = "Foo";

                fixture.detectChanges(); // check if changes occurred
                // then check the native element again to see if the content has changed as expected
            });
        }));
    });



     