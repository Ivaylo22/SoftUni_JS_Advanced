function solve(worker){
    let res = {};
    if(!worker.dizziness){
        return worker;
    }

    worker.levelOfHydrated += 0.1 * worker.experience * worker.weight
    return worker;
}

solve(
    { 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
    }
  )
