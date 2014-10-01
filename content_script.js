// Directly adapted from Cloud-To-Butt - https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) 
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bnew study\b/g, "tumblr post");
	v = v.replace(/\brebuild\b/g, "avenge");
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bsmartphone\b/g, "pokédex");
	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\belection\b/g, "eating contest");
	v = v.replace(/\bcongressional leaders\b/g, "river spirits");
	v = v.replace(/\bhomeland security\b/g, "homestar runner");
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}

