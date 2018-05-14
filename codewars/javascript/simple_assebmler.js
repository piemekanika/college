function simple_assembler(program) {

    var regs = new Map();
    var commands = [];

    for (var i = 0; i < program.length; i++) {
        var cmd = program[i].substring(0, 3);
        var reg = program[i].substring(4, 5);

        switch (cmd) {
            case 'mov':                
                var value = parseInt(program[i].substring(6, program[i].length));
                if (value == NaN) value = program[i].substring(6, 7);
                regs.set(reg, value);
                break;
            
            case 'inc':
                regs.set(reg, regs.get(reg) + 1);
                break;

            case 'dec':
                regs.set(reg, regs.get(reg) - 1);
                break;

            case 'jnz':
                if (regs.get(reg) != 0) {
                    var value = parseInt(program[i].substring(6, program[i].length));
                    i += value - 1;
                    console.log('jnz tick');
                }
                break;

            default: break;
        }
    }

    for (var [key, value] of regs.entries()) {
        console.log('[' + key + ' -> ' + value + ']');
    }
}

simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']);