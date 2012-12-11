#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.Return)) {
		rigidbody.active = false;
		transform.position += Vector3.up * 10;
		transform.eulerAngles = Vector3(0,  transform.eulerAngles.y, 0);
		rigidbody.active = true;
		rigidbody.velocity = rigidbody.velocity * 0;
		rigidbody.angularVelocity = rigidbody.angularVelocity* 0;

	}
}