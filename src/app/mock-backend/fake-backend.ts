import { Http, BaseRequestOptions, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
    backend: MockBackend,
    options: BaseRequestOptions
) {
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZhaWJoYXYgR2FuanUiLCJpYXQiOjE1MzIxMDQzMzUsImFkbWluIjp0cnVlLCJleHAiOjE1MzMzMDkzMzV9.7XdIYOSLx1y-vHVw7fXlE0FoWc3xeU49O0gKZTnmEiM';
    backend.connections.subscribe((connection: MockConnection) => {
        // we are using setTimeout() function to simulate an
        // asynchronous call to server which takes 1 sec.
        setTimeout(() => {

            // Fake api authentication
            if (connection.request.url.endsWith('/api/authenticate') &&
                connection.request.method === RequestMethod.Post) {
                const body = JSON.parse(connection.request.getBody());
                if (body.email === 'vaibhav_ganju@gmail.com' && body.password === '1234') {
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {token}
                    })));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({status: 200})
                    ));
                }
            }

            // Fake implementation for /api/orders
            if (connection.request.url.endsWith('/api/orders') &&
                connection.request.method === RequestMethod.Get) {
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            status: 200,
                            body: [1, 2, 3]
                        })));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            status: 401
                        })
                    ));
                }
            }
        }, 1000);
    });

    return new Http(backend, options);
}

export const fackBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
