let getSel = sel => document.querySelector(sel);

getSel('.intro').addEventListener('click', function(){
    getSel('.introContent').classList.remove('hide');
    getSel('.intro').classList.add('active');
    getSel('.educationContent').classList.add('hide');
    getSel('.education').classList.remove('active');
    getSel('.experienceContent').classList.add('hide');
    getSel('.experience').classList.remove('active');
    getSel('.skillsContent').classList.add('hide');
    getSel('.skills').classList.remove('active');
    getSel('.contactsContent').classList.add('hide');
    getSel('.contacts').classList.remove('active');

});

getSel('.education').addEventListener('click', function(){
    getSel('.introContent').classList.add('hide');
    getSel('.intro').classList.remove('active');
    getSel('.educationContent').classList.remove('hide');
    getSel('.education').classList.add('active');
    getSel('.experienceContent').classList.add('hide');
    getSel('.experience').classList.remove('active');
    getSel('.skillsContent').classList.add('hide');
    getSel('.skills').classList.remove('active');
    getSel('.contactsContent').classList.add('hide');
    getSel('.contacts').classList.remove('active');
});

getSel('.experience').addEventListener('click', function(){
    getSel('.introContent').classList.add('hide');
    getSel('.intro').classList.remove('active');
    getSel('.educationContent').classList.add('hide');
    getSel('.education').classList.remove('active');
    getSel('.experienceContent').classList.remove('hide');
    getSel('.experience').classList.add('active');
    getSel('.skillsContent').classList.add('hide');
    getSel('.skills').classList.remove('active');
    getSel('.contacts').classList.add('hide');
    getSel('.contacts').classList.remove('active');
});

getSel('.skills').addEventListener('click', function(){
    getSel('.introContent').classList.add('hide');
    getSel('.intro').classList.remove('active');
    getSel('.educationContent').classList.add('hide');
    getSel('.education').classList.remove('active');
    getSel('.experienceContent').classList.add('hide');
    getSel('.experience').classList.remove('active');
    getSel('.skillsContent').classList.remove('hide');
    getSel('.skills').classList.add('active');
    getSel('.contactsContent').classList.add('hide');
    getSel('.contacts').classList.remove('active');
});

getSel('.contacts').addEventListener('click', function(){
    getSel('.introContent').classList.add('hide');
    getSel('.intro').classList.remove('active');
    getSel('.educationContent').classList.add('hide');
    getSel('.education').classList.remove('active');
    getSel('.experienceContent').classList.add('hide');
    getSel('.experience').classList.remove('active');
    getSel('.skillsContent').classList.add('hide');
    getSel('.skills').classList.remove('active');
    getSel('.contactsContent').classList.remove('hide');
    getSel('.contacts').classList.add('active');
});
