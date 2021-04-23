function pwdFunction(){
  const workingD = process.cwd();
  process.stdout.write(workingD);
  process.stdout.write('\nprompt >');
}

module.exports = pwdFunction;
