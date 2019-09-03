(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_1536202 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_1536202_1();

	// image_replace
	this.instance = new lib.replace_image_1536202();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.3,0,656.4,800);


// symbols:
(lib.replace_image_1536202 = function() {
	this.initialize(img.replace_image_1536202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// thin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,247.5,0.1,-247.4).s().p("EgXbAnEMAAAhOHMAu2AAAMAAABOHg");
	this.shape.setTransform(150,250);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.reflect_mask_1536202 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("A1gIWQgFAAgEgCQgGgDgFgFQgFAAgEgCQgmgPgNgrIgKAAIgeAAQgSBDhagPQg/gLgJhHQgFAAgBgCQgWgtgMg1QARgDgCgbIAFAAIAAgKIAAgKQAXgRAcgLQAEgCAFAAIAAgKQBJhcAWiTIAFgBIAAgIIAAgKQAUgPAWgNQADgCAFAAIAAgKIAAgKQArggAWg4QAHgUALgRQA3hXBEhIQAYgaAfgTQAbgSA0AHQAoAFAKAjQAgAYgQBBQgBABgFAAIgBAKQgEAUgPAKQABAyAXgmQABgCAFAAQApgxAqgwQACgDAFAAIAAgKIAAgKQAtgoAvglQADgDAFAAIAAgKQAUgPAWgNQADgCAFAAIAAgKQA+gGAkAUQACABAAAFIALAJQAJAGACAHQATBUgfAsQgOAUgFAnQgEAigPAiQgHASAAAZQgBBKgiAkIAAAwIAAAKIABAKQAHAwgSAWQABA3AbAcQACACAAAFQASAXACAvIAKAAIAKAAIAAgKQAKAAAIgEQACgBAAgFIAAgKQAvghAkgsQACgDAFAAQA9gsArg/QABgDAFAAIAAgKIAAgKQAbgNARgWQABgDAFAAQAjgeAhggQACgDAAgFQAPgUATgPIAMgKQAYgUARgbQANgXgdgkQgaghAPgaQgDg1AogQQAkgPAmAMQBKAWA3AoQAqBQg2A6QgIAHgBAHQgPBmgkBJQgdA8AVA9QAFAAADgCQCGiNCmhpIAKAAQAsgCBMAMQAVgTAbgPQBAgiBigCQA5AnA2AoQAJAGADAIQAcBBAngmQAUgPASgRQAHgIAIgCQA2gUgIgoQgYh2BpAAQAUAAATAFQAxANAkAbQA4AqgeBTIgdAVQgGAEgEAAQhEgHgJArQgEATgHAPQgwBng4BjQgUAjALAQQAFAFABAAQBXg+BMhKIEtkfQADgRAMgJQAFgEgFgEQgtgpgeg3QgDg/AhgbQA7guBOggQBogpBmgsQAfgNAcgGQBagUAcA0IAKAUQAFAKgBAKQgMBmhHAxQgGAEABADQARAyAvAWIALATQAEAGABAGQAUCCh+gLQgngKgggSQgzgcghAfQiFB6h7CCQiPCYigCGQgGAFgDAFQhBBXiYgCQhdgfgchjQgMgrglAXQguAig4ASQhwAkhChEQgXgggOgtQgRg2gMBIQgGAlgPAdQgQAjgvAIQgIARgegKQgtgRgagnQgEgGAAgFQgGhMgxAuQhQBFhlglQhZgggUhkQACgugaAVQgRAOgOAQQgeAjgbAkQg2BJhUApQgFAAgCADQgkAnhDAIIAAAFQhjAPgpgyQgbACgJgSQgQgfgRASQgeAegpATQgFAAgCADQg4A7hhASQAAAFgBABQgrAMglAAQg3AAgsgcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.6,-56.2,343.4,112.6);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-242,1.218,1.218,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-367,343.4,734.1);


(lib.reflect_container_cjs_1536202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// preview
	this.preview = new lib.reflect();
	this.preview.setTransform(-0.3,0,1,1,0,0,0,-0.4,0);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.3,423.5,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-423},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-367,343.4,734.1);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.reflect_wrapper_1536202 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_1536202();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-367,343.4,734.1);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

	// mc
	this.lux = new lib.glitter();

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.sign_effect_1536202_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(80,651);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(63.8,587.8);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(248.7,668.9);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(179.6,659.5,0.725,0.725);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(259.1,605.1,0.692,0.692);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(20.7,663.2,0.66,0.66);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(153.5,595.3);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(342.6,574.8);

	// mask
	this.reflect_mask = new lib.reflect_mask_1536202();
	this.reflect_mask.setTransform(182.7,623.5);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgUpA0qQgFAAgEgCQgGgDgFgFQgFAAgEgCQgmgPgNgrIgKAAIgeAAQgSBDhagPQg/gLgJhHQgFAAgBgCQgWgtgMg1QARgDgCgbIAFAAIAAgKIAAgKQAXgRAcgLQAEgCAFAAIAAgKQBJhcAWiTIAFgBIAAgKIAAgKQAUgPAWgNQADgCAFAAIAAgKIAAgKQArggAWg4QAHgUALgRQA3hXBEhIQAYgaAfgTQAbgSA0AHQAoAFAKAjQAgAYgQBBQgBABgFAAIgBAKQgEAUgPAKQABAyAXgmQABgCAFAAQApgxAqgwQACgDAFAAIAAgKIAAgKQAtgoAvglQADgDAFAAIAAgKQAUgPAWgNQADgCAFAAIAAgKQA+gGAkAUQACABAAAFIALAJQAJAGACAHQATBUgfAsQgOAUgFAnQgEAigPAiQgHASAAAZQgBBKgiAkIAAAyIAAAKIABAKQAHAwgSAWQABA3AbAcQACACAAAFQASAXACAvIAKAAIAKAAIAAgKQAKAAAIgEQACgBAAgFIAAgKQAvghAkgsQACgDAFAAQA9gsArg/QABgDAFAAIAAgKIAAgKQAbgNARgYQABgDAFAAQAjgeAhggQACgDAAgFQAPgUATgPIAMgKQAYgUARgbQANgXgdgkQgaghAPgaQgDg1AogQQAkgPAmAMQBKAWA3AoQAqBQg2A6QgIAHgBAHQgPBmgkBLQgdA8AVA9QAFAAADgCQCEiNCohrIAKAAQAsgCBMAMQAVgTAbgPQBAgiBigCQA5AnA2AoQAJAGADAIQAcBDAngoQAUgPASgRQAHgIAIgCQA2gUgIgoQgYh2BpAAQAUAAATAFQAxANAkAbQA4AqgeBTIgdAVQgGAEgEAAQhEgHgJArQgEATgHARQgwBng4BjQgUAjALAQQAFAFABAAQBXg+BMhKIEtkhQADgRAMgJQAFgEgFgEQgtgpgeg3QgDg/AhgbQA7guBOggQBogpBmgsQAfgNAcgGQBagUAcA0IAKAUQAFAKgBAKQgMBmhHAxQgGAEABADQARAyAvAWIALATQAEAGABAGQAUCCh+gLQgngKgggSQgzgcghAfQiFB6h7CEQiPCYigCGQgGAFgDAFQhBBXiYgCQhdgfgchjQgMgrglAXQguAig4ASQhwAkhChEQgXgggOgtQgRg2gMBIQgGAlgPAdQgQAjgvAIQgIARgegKQgvgRgagnQgEgGAAgFQgEhMgxAuQhQBFhlglQhZgggUhkQACgugaAVQgRAOgOAQQgeAjgbAkQg2BJhUApQgFAAgCADQgkAnhDAIIAAAFQhjAPgpgyQgbACgJgSQgQgfgRASQgeAegpATQgFAAgCADQg4A7hhASQAAAFgBABQgrANglAAQg3AAgsgdg");
	mask.setTransform(177.2,339.9);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_1536202();
	this.reflect_wrapper.setTransform(11,623.5);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.3,256.5,415,734.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;