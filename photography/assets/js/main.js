/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					if ($(this).attr('target') === '_blank') {
						// Hide.
						$menu._hide();

						// Redirect.
						window.setTimeout(function() {
							window.open(href);
						}, 350);
					} else {
						// Hide.
						$menu._hide();

						// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);
					}
				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

// Function to create the html element below
const createModal = () => {
	const divStr = '<div id="myModal" class="modal">' +
		'<a onclick="removeModal()" class="close">Close</a>' +
        '<img id="modal-img">' +
        '<div id="caption"></div>' +
        '</div>'

    // This creates an entire html document with the divStr node in the body - we just need the divStr node
    const modalDoc = new DOMParser().parseFromString(divStr, 'text/html')
    const relevantNode = modalDoc.body.firstChild

    // Exit modal with click or with escape key
    relevantNode.onclick = () => {
        removeModal()
    }
    return relevantNode
}

// Remove a html node from its parent
const removeModal = () => {
    const imgModal = document.getElementById("myModal")
    imgModal ? imgModal.parentElement.removeChild(imgModal) : null
}

// Immediately index all the images, place onclick functionality on all images
let img_list = document.getElementsByTagName("img")
for (let i = 0; i < img_list.length; ++i) {
    let el = img_list.item(i)

    el.onclick = () => {
        const imgModal = createModal()
        el.parentElement.appendChild(imgModal)
        document.getElementById('modal-img').src = el.getAttribute("src").replace('_small', '')
        document.getElementById('caption').innerHTML = el.getAttribute("alt")
    }
}

// On Esc key, remove the modal element to return to the original page
document.addEventListener("keydown", event => {
    if (event.key == "Escape") {
        removeModal()
    }
})