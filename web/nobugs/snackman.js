'use strict';

var SnackMan = {};

SnackMan = function() {
	this.path = {n2:{n1:1, n3:1}, n3:{n2:1, n4:1}, n4:{n3:1, n5:1}, n5:{n4:1, n6:1}, n6:{n5:1, n7:1}, n7:{n6:1, n8:1}, n8:{n7:1, n9:1}, n9:{n8:1, n10:1}, n10:{n9:1, n11:1}, n12:{n11:1, n13:1}, n13:{n12:1, n14:1}, n14:{n13:1, n15:1}, n15:{n14:1, n16:1}, n16:{n15:1, n17:1}, n17:{n16:1, n18:1}, n18:{n17:1, n19:1}, n19:{n18:1, n20:1}, n20:{n19:1, n21:1}, n22:{n21:1, n23:1}, n23:{n22:1, n24:1}, n24:{n23:1, n25:1}, n25:{n24:1, n26:1}, n26:{n25:1, n27:1}, n27:{n26:1, n28:1}, n28:{n27:1, n29:1}, n29:{n28:1, n30:1}, n30:{n29:1, n31:1}, n32:{n31:1, n33:1}, n33:{n32:1, n34:1}, n34:{n33:1, n35:1}, n35:{n34:1, n36:1}, n36:{n35:1, n37:1}, n37:{n36:1, n38:1}, n38:{n37:1, n39:1}, n39:{n38:1, n40:1}, n40:{n39:1, n11:1}, n41:{n31:0.5, n42:0.5}, n42:{n41:0.5, n43:0.5}, n43:{n42:0.5, n44:0.5}, n44:{n43:0.5, n45:0.5}, n45:{n44:0.5, n46:0.5}, n46:{n45:0.5, n47:0.5}, n47:{n46:0.5, n48:0.5}, n48:{n47:0.5, n49:0.5}, n49:{n48:0.5, n50:0.5}, n50:{n49:0.5, n51:0.5}, n51:{n50:0.5, n52:0.5}, n52:{n51:0.5, n53:0.5}, n53:{n52:0.5, n54:0.5}, n54:{n53:0.5, n55:0.5}, n55:{n54:0.5, n56:0.5}, n56:{n55:0.5, n57:0.5}, n57:{n56:0.5, n58:0.5}, n58:{n57:0.5, n59:0.5}, n59:{n58:0.5, n1:0.5}, n60:{n1:1, n61:1}, n61:{n60:1, n62:1}, n62:{n61:1, n63:1}, n63:{n62:1, n64:1}, n64:{n63:1, n65:1}, n65:{n64:1, n66:1}, n66:{n65:1, n67:1}, n67:{n66:1, n68:1}, n68:{n67:1, n69:1}, n70:{n31:1, n71:1}, n71:{n70:1, n72:1}, n72:{n71:1, n73:1}, n73:{n72:1, n74:1}, n74:{n73:1, n75:1}, n75:{n74:1, n76:1}, n76:{n75:1, n77:1}, n77:{n76:1, n78:1}, n78:{n77:1, n79:1}, n80:{n79:1, n81:1}, n81:{n80:1, n82:1}, n82:{n81:1, n83:1}, n83:{n82:1, n84:1}, n84:{n83:1, n85:1}, n85:{n84:1, n86:1}, n86:{n85:1, n87:1}, n87:{n86:1, n88:1}, n88:{n87:1, n89:1}, n90:{n79:0.5, n91:0.5}, n91:{n90:0.5, n92:0.5}, n92:{n91:0.5, n93:0.5}, n93:{n92:0.5, n94:0.5}, n94:{n93:0.5, n95:0.5}, n95:{n94:0.5, n96:0.5}, n96:{n95:0.5, n97:0.5}, n97:{n96:0.5, n98:0.5}, n98:{n97:0.5, n99:0.5}, n99:{n98:0.5, n100:0.5}, n100:{n99:0.5, n101:0.5}, n101:{n100:0.5, n102:0.5}, n102:{n101:0.5, n103:0.5}, n103:{n102:0.5, n104:0.5}, n104:{n103:0.5, n105:0.5}, n105:{n104:0.5, n106:0.5}, n106:{n105:0.5, n107:0.5}, n107:{n106:0.5, n108:0.5}, n108:{n107:0.5, n109:0.5}, n109:{n108:0.5, n1:0.5}, n110:{n89:1, n111:1}, n111:{n110:1, n112:1}, n112:{n111:1, n113:1}, n113:{n112:1, n114:1}, n114:{n113:1, n115:1}, n115:{n114:1, n116:1}, n116:{n115:1, n117:1}, n117:{n116:1, n118:1}, n118:{n117:1, n119:1}, n119:{n118:1, n120:1}, n120:{n119:1, n121:1}, n121:{n120:1, n122:1}, n122:{n121:1, n123:1}, n123:{n122:1, n124:1}, n124:{n123:1, n125:1}, n125:{n124:1, n126:1}, n126:{n125:1, n127:1}, n127:{n126:1, n128:1}, n128:{n127:1, n129:1}, n129:{n128:1, n1:1}, n1:{n2:1, n59:1, n60:1, n109:1, n129:1}, n11:{n10:1, n12:1, n40:1 }, n21:{n20:1, n22:1}, n31:{n30:1, n32:1, n41:1, n70:1}, n79:{n78:1, n80:1, n90:1}, n89:{n88:1, n110:1}, n69:{n68:1} };
	this.nodes = {n1:{id: 'n1', x:260, y: 390}, n2:{id: 'n2', x:251, y: 380}, n3:{id: 'n3', x:242, y: 370}, n4:{id: 'n4', x:233, y: 360}, n5:{id: 'n5', x:224, y: 350}, n6:{id: 'n6', x:215, y: 340}, n7:{id: 'n7', x:206, y: 330}, n8:{id: 'n8', x:197, y: 320}, n9:{id: 'n9', x:188, y: 310}, n10:{id: 'n10', x:179, y: 300}, n11:{id: 'n11', x:170, y: 290}, n12:{id: 'n12', x:163, y: 290}, n13:{id: 'n13', x:156, y: 290}, n14:{id: 'n14', x:149, y: 290}, n15:{id: 'n15', x:142, y: 290}, n16:{id: 'n16', x:135, y: 290}, n17:{id: 'n17', x:128, y: 290}, n18:{id: 'n18', x:121, y: 290}, n19:{id: 'n19', x:114, y: 290}, n20:{id: 'n20', x:107, y: 290}, n21:{id: 'n21', x:100, y: 290}, n22:{id: 'n22', x:100, y: 294}, n23:{id: 'n23', x:100, y: 298}, n24:{id: 'n24', x:100, y: 302}, n25:{id: 'n25', x:100, y: 306}, n26:{id: 'n26', x:100, y: 310}, n27:{id: 'n27', x:100, y: 314}, n28:{id: 'n28', x:100, y: 318}, n29:{id: 'n29', x:100, y: 322}, n30:{id: 'n30', x:100, y: 326}, n31:{id: 'n31', x:100, y: 330}, n32:{id: 'n32', x:107, y: 326}, n33:{id: 'n33', x:114, y: 322}, n34:{id: 'n34', x:121, y: 318}, n35:{id: 'n35', x:128, y: 314}, n36:{id: 'n36', x:135, y: 310}, n37:{id: 'n37', x:142, y: 306}, n38:{id: 'n38', x:149, y: 302}, n39:{id: 'n39', x:156, y: 298}, n40:{id: 'n40', x:163, y: 294}, n41:{id: 'n41', x:108, y: 333}, n42:{id: 'n42', x:116, y: 336}, n43:{id: 'n43', x:124, y: 339}, n44:{id: 'n44', x:132, y: 342}, n45:{id: 'n45', x:140, y: 345}, n46:{id: 'n46', x:148, y: 348}, n47:{id: 'n47', x:156, y: 351}, n48:{id: 'n48', x:164, y: 354}, n49:{id: 'n49', x:172, y: 357}, n50:{id: 'n50', x:180, y: 360}, n51:{id: 'n51', x:188, y: 363}, n52:{id: 'n52', x:196, y: 366}, n53:{id: 'n53', x:204, y: 369}, n54:{id: 'n54', x:212, y: 372}, n55:{id: 'n55', x:220, y: 375}, n56:{id: 'n56', x:228, y: 378}, n57:{id: 'n57', x:236, y: 381}, n58:{id: 'n58', x:244, y: 384}, n59:{id: 'n59', x:252, y: 387}, n60:{id: 'n60', x:264, y: 394}, n61:{id: 'n61', x:268, y: 398}, n62:{id: 'n62', x:272, y: 402}, n63:{id: 'n63', x:276, y: 406}, n64:{id: 'n64', x:280, y: 410}, n65:{id: 'n65', x:284, y: 414}, n66:{id: 'n66', x:288, y: 418}, n67:{id: 'n67', x:292, y: 422}, n68:{id: 'n68', x:296, y: 426}, n69:{id: 'n69', x:300, y: 430}, n70:{id: 'n70', x:100, y: 334}, n71:{id: 'n71', x:100, y: 338}, n72:{id: 'n72', x:100, y: 342}, n73:{id: 'n73', x:100, y: 346}, n74:{id: 'n74', x:100, y: 350}, n75:{id: 'n75', x:100, y: 354}, n76:{id: 'n76', x:100, y: 358}, n77:{id: 'n77', x:100, y: 362}, n78:{id: 'n78', x:100, y: 366}, n79:{id: 'n79', x:100, y: 370}, n80:{id: 'n80', x:100, y: 374}, n81:{id: 'n81', x:100, y: 378}, n82:{id: 'n82', x:100, y: 382}, n83:{id: 'n83', x:100, y: 386}, n84:{id: 'n84', x:100, y: 390}, n85:{id: 'n85', x:100, y: 394}, n86:{id: 'n86', x:100, y: 398}, n87:{id: 'n87', x:100, y: 402}, n88:{id: 'n88', x:100, y: 406}, n89:{id: 'n89', x:100, y: 410}, n90:{id: 'n90', x:108, y: 371}, n91:{id: 'n91', x:116, y: 372}, n92:{id: 'n92', x:124, y: 373}, n93:{id: 'n93', x:132, y: 374}, n94:{id: 'n94', x:140, y: 375}, n95:{id: 'n95', x:148, y: 376}, n96:{id: 'n96', x:156, y: 377}, n97:{id: 'n97', x:164, y: 378}, n98:{id: 'n98', x:172, y: 379}, n99:{id: 'n99', x:180, y: 380}, n100:{id: 'n100', x:188, y: 381}, n101:{id: 'n101', x:196, y: 382}, n102:{id: 'n102', x:204, y: 383}, n103:{id: 'n103', x:212, y: 384}, n104:{id: 'n104', x:220, y: 385}, n105:{id: 'n105', x:228, y: 386}, n106:{id: 'n106', x:236, y: 387}, n107:{id: 'n107', x:244, y: 388}, n108:{id: 'n108', x:252, y: 389}, n109:{id: 'n109', x:260, y: 390}, n110:{id: 'n110', x:108, y: 409}, n111:{id: 'n111', x:116, y: 408}, n112:{id: 'n112', x:124, y: 407}, n113:{id: 'n113', x:132, y: 406}, n114:{id: 'n114', x:140, y: 405}, n115:{id: 'n115', x:148, y: 404}, n116:{id: 'n116', x:156, y: 403}, n117:{id: 'n117', x:164, y: 402}, n118:{id: 'n118', x:172, y: 401}, n119:{id: 'n119', x:180, y: 400}, n120:{id: 'n120', x:188, y: 399}, n121:{id: 'n121', x:196, y: 398}, n122:{id: 'n122', x:204, y: 397}, n123:{id: 'n123', x:212, y: 396}, n124:{id: 'n124', x:220, y: 395}, n125:{id: 'n125', x:228, y: 394}, n126:{id: 'n126', x:236, y: 393}, n127:{id: 'n127', x:244, y: 392}, n128:{id: 'n128', x:252, y: 391}, n129:{id: 'n129', x:260, y: 390} };
	this.keynodes = ['n1', 'n11', 'n21', 'n31', 'n69', 'n79', 'n89' ];

	this.snackManFinalPath = new Array();
	this.mapGraph = {};
	
	this.createGraph();
	this.counter = [this.snackManFinalPath[2], this.snackManFinalPath[3], // n21, n31, n79, n89
	                this.snackManFinalPath[5], this.snackManFinalPath[6]];

	this.currentNode = this.snackManFinalPath[0];
	  
	this.img = new Sprite({
			ticksPerFrame: 0,
			numberOfFrames: 3,
			horzSeq: true,
			x: 260,
			y: 390,
			width: 96,
			height: 32,
			sourceY: 0,
			imgSrc : "images/$cooker.png"
	});
	

};

// extracts some important information and creates the graph
SnackMan.prototype.createGraph = function() {

	for (var key = 0; key < this.keynodes.length; key++)
		this.snackManFinalPath[key] = this.nodes[this.keynodes[key]];
	
	this.graph = new Graph(this.path);
};


SnackMan.prototype.reset = function() {
	this.currentNode = this.snackManFinalPath[0];
	this.img.x = this.currentNode.x;
	this.img.y = this.currentNode.y  - 32;
	this.img.sourceY = 0;
	this.img.update();
};

SnackMan.prototype.draw = function(ctx) {
	
	this.img.draw(ctx);
};

/**********************************************************/
/**          create the commands to evaluate             */
/**********************************************************/
SnackMan.prototype.goToBarCounter = function(cust) {
	
	
	if (cust < 1 || cust > 4) {
		//TODO id ?
		BlocklyApps.log.push(["fail", "Error_doesntExistCustomer", id]);
		throw false;
	}
	
	this.animateSnackMan( this.counter[cust-1] );
  
};

SnackMan.prototype.goToDisplay = function() {
	this.animateSnackMan( this.snackManFinalPath[1] );
};

SnackMan.prototype.goToCooler = function() {
	this.animateSnackMan( this.snackManFinalPath[4] );
};

SnackMan.prototype.alertRun = function(txt) {
	alert(txt);
};

SnackMan.prototype.isThereACustomer = function() {
	
	var achou = false;
	for (var i=0; i<this.counter.length;i++)
		if (this.currentNode.id === this.counter[i].id) {
			achou = CustomerManager.isThereACustomerCounter(i+1);
			break;
		}
	
	BlocklyApps.log.push(['IM', 0]); // turn to front
	CustomerManager.update();
	BlocklyApps.log.push(['IM', 32]); // turn to left to find a customer in the counter
	CustomerManager.update();
	BlocklyApps.log.push(['IM', 0]); // turn to front
	CustomerManager.update();

	return achou;
};

SnackMan.prototype.animateSnackMan = function(dest) {

	var solution = this.graph.findShortestPath(this.currentNode.id, dest.id);
	for (var i=0;i<solution.length;i++) {
		
		var node = this.nodes[solution[i]];
		
		BlocklyApps.log.push(['MS', this.currentNode.x, this.currentNode.y,
		                      		node.x, node.y]);
		
		this.currentNode = node;
		
		CustomerManager.update();
	}
	BlocklyApps.log.push(['IM', 0]);

};

SnackMan.prototype.changeSnackManImage = function(id) {
	this.img.sourceY = id;
	this.img.update();
	
	Game.display();
};

SnackMan.prototype.changeSnackManPosition = function(ox, oy, nx, ny) {
	if (nx < ox)
		this.img.sourceY = 32;
	else
		if (nx > ox)
			this.img.sourceY = 64;
		else if (ny < oy)
			    this.img.sourceY = 96;
			 else
				this.img.sourceY = 0;
	
	this.img.update();
	
	this.img.x = nx;
	this.img.y = ny - 32;
	
	Game.display();
};


/**********************************************************/
/**              execute the commands                     */
/**********************************************************/
