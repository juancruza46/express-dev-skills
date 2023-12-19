//file begins singular and lowercase
//fake data skills
const devskills = [
{id: 111111, devskill: 'JavaScript', fluent: true},
{id: 222222, devskill: 'Debug', fluent: false},
{id: 333333, devskill: 'Data Structure', fluent: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

//insert model functions:
function update(id, updatedDevskill) {
    id = parseInt(id);
    const devskill = devskills.find(devskill => devskill.id === id);
    Object.assign(devskill, updatedDevskill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = devskills.findIndex(devskill => devskill.id === id);
    devskills.splice(idx, 1);
}

function create(devskill) {
    devskill.id = Date.now() % 1000000;
    devskill.fluent = false;
    devskills.push(devskill);
}

function getOne(id) {
    id = parseInt(id);
    return devskills.find(devskill => devskill.id === id);
}

function getAll() {
    return devskills;
}