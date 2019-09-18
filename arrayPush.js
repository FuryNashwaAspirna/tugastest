const hewan = ['winnie', 'the', 'pooh'], tambahan = ['kelinci', 'kucing', {obj: 'rusa'}] 
const arrayPushHewan = async () => {
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NODE:
Array map adalah fungsi perulangan array seperti for in dan foreach*/