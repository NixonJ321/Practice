const statusRef = document.querySelector(".sub__status");

function getSubStatus() {
  return new Promise((resolve, reject) => {
    resolve('FREE')
  })
}



function getVideo(subStatus) {
  return new Promise((resolve, reject) => {
    if (subStatus === "VIP") {
      resolve("show video");
    }
    if (subStatus === 'FREE') {
      resolve('Get out of here you broke MF')
    }

    else{ resolve('please subscribe')}
  });
}

async function main() {
  const status = await getSubStatus();
  statusRef.innerHTML = status;
 console.log( await getVideo(status))
}

main()
