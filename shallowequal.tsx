function shallowEqualObjects(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};

function shallowEqualArrays(arrA: any, arrB: any) {
  if (arrA === arrB) {
    return true;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
};

export function shallowEqual(a: any, b: any) {
	if(Array.isArray(a)){
		shallowEqualArrays(a,b);
	}
	else{
		shallowEqualObjects(a,b);
	}
}