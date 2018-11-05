const HardWorkingService = require('./../js/hard-working.service');

describe('Hard Working Service', () => {
    let hardWorkingService;

    beforeEach(() => {
        hardWorkingService = new HardWorkingService();
    });

    it('getUserData() should return a User object', done => {
        hardWorkingService.getUserData().then(userData => {
            expect(userData).not.toBeUndefined(null);
            expect(userData.name).toBeDefined(); //esperamos que este definido
            expect(userData.age).toBeDefined();
            done(); //ya termino dice jasmine callback
        });
    });

    it('isEmail() should validate emails correctly', () => {
        expect(hardWorkingService.isEmail())
            .toBe(false);
        expect(hardWorkingService.isEmail(undefined))
            .toBe(false);
        expect(hardWorkingService.isEmail(null))
            .toBe(false);
        expect(hardWorkingService.isEmail({}))
            .toBe(false);
        expect(hardWorkingService.isEmail(''))
            .toBe(false);
        expect(hardWorkingService.isEmail('abc'))
            .toBe(false);
        expect(hardWorkingService.isEmail(123))
            .toBe(false);
        expect(hardWorkingService.isEmail('@'))
            .toBe(false);
        expect(hardWorkingService.isEmail('a@a.a'))
            .toBe(true);
        expect(hardWorkingService.isEmail('abc@abc.abc'))
            .toBe(true);
        expect(hardWorkingService.isEmail('abc@abc.com'))
            .toBe(true);
    });

    it('saveNewUser() should save a new object if name and age are valid', done => {
        let p1 = hardWorkingService.saveNewUser().then(result => { //chekea si es un error
            expect(result instanceof Error).toBe(true);
        });
        let p2 = hardWorkingService.saveNewUser(1, '2').then(result => { //falla ya que mando un nuemero a name
            expect(result instanceof Error).toBe(true);
        });
        let p3 = hardWorkingService.saveNewUser('User', 20).then(result => { //da bien ya que es un usuario correcto
            expect(result instanceof Error).toBe(false);
        });

        Promise.all([p1,p2,p3]).catch(() => done()); //corre primero todas las promesas y espera a que terminen
    });

    it('callDependency() should call dependency()', () => {
        spyOn(hardWorkingService, 'dependency'); //espias, permite ver con que parametros llame a una funcion
        hardWorkingService.callDependency();
        expect(hardWorkingService.dependency).toHaveBeenCalled(); //calldependendy fue llamado??
    //    expect(hardWorkingService.dependency).not.toHaveBeenCalled();   este falla
    });
});