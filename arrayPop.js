const hewan = ['winnie', 'the', 'pooh'], tambahan = ['kelinci', 'kucing', {obj: 'rusa'}] 
const arrayPushHewan = async () => {
     await tambahan.pop();
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NODE:
Array map adalah fungsi array untuk menghapus index/element terakhir dari sebuah array*/