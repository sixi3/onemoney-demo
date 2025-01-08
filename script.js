document.addEventListener('DOMContentLoaded', function() {
    // First, define translations
    const translations = {
        en: {
            selectAccounts: "Select Accounts",
            selectAccountsSubtitle: "Select the accounts you want to link:",
            showingAccounts: "Showing {{count}} accounts discovered for:",
            editButton: "edit",
            accountsSelected: "{{selected}}/{{total}} accounts selected",
            proceedButton: "Proceed",
            poweredBy: "powered by",
            savingsAccount: "Savings Account",
            currentAccount: "Current Account",
            accountNumber: "Account No: ",
            enterMobile: "Enter mobile number",
            linkAccounts: "Link all your accounts",
            mobileSubtitle: "Enter mobile number to link your accounts",
            enterOtp: "Enter OTP",
            sendOtp: "Send OTP",
            verifyOtp: "Verify OTP",
            pleaseEnterMobile: "Please enter your mobile number",
            invalidMobile: "Please enter a valid 10-digit mobile number",
            selectedAccounts: "Selected Accounts",
            selectedAccountsSubtitle: "You have selected the following accounts to link:",
            mobileNumber: "Mobile Number:",
            editSelection: "Edit Selection",
            confirm: "Confirm"
        },
        hi: {
            selectAccounts: "खाते चुनें",
            selectAccountsSubtitle: "लिंक करने के लिए खाते चुनें:",
            showingAccounts: "{{count}} खाते मिले हैं:",
            editButton: "बदलें",
            accountsSelected: "{{selected}}/{{total}} खाते चुने गए",
            proceedButton: "आगे बढ़ें",
            poweredBy: "powered by",
            savingsAccount: "बचत खाता",
            currentAccount: "चालू खाता",
            accountNumber: "खाता संख्या: ",
            enterMobile: "अपना मोबाइल नंबर दर्ज करें",
            linkAccounts: "अपने सभी खाते लिंक करें",
            mobileSubtitle: "लिंक किए गए खातों को खोजने के लिए अपना मोबाइल नंबर दर्ज करें",
            enterOtp: "OTP दर्ज करें",
            sendOtp: "OTP भेजें",
            verifyOtp: "OTP सत्यापित करें",
            pleaseEnterMobile: "कृपया अपना मोबाइल नंबर दर्ज करें",
            invalidMobile: "कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें",
            selectedAccounts: "चयनित ख�े",
            selectedAccountsSubtitle: "आपने निम्नलिखित खातों को लिंक करने के लिए चुना है:",
            mobileNumber: "मोबाइल न�बर:",
            editSelection: "चयन संप�ित करें",
            confirm: "पुष्टि करें"
        },
        ml: {
            selectAccounts: "അക്കൗണ്ടുകൾ തിരഞ്ഞെടുക്കുക",
            selectAccountsSubtitle: "ലിങ്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്ന അക്കൗണ്ടുകൾ തിരഞ്ഞെടുക്കുക:",
            showingAccounts: "കണ്ടെത്തിയ {{count}} അക്കൗണ്ടുകൾ:",
            editButton: "എഡിറ്റ്",
            accountsSelected: "{{selected}}/{{total}} അക്കൗണ്ടുകൾ തിരഞ്ഞെടുത്തു",
            proceedButton: "തുടരുക",
            poweredBy: "powered by",
            savingsAccount: "സേവിംഗ്സ് അക്കൗണ്ട്",
            currentAccount: "കറന്റ് അക്കൗണ്ട്",
            accountNumber: "അക്കൗണ്ട് നമ്പർ: ",
            enterMobile: "നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക",
            linkAccounts: "നിങ്ങളുടെ എല്ലാ അക്കൗണ്ടുകളും ലിങ്ക് ചെയ്യുക",
            mobileSubtitle: "ലിങ്ക് ചെയ്ത അക്കൗണ്ടുകൾ കണ്ടെത്താൻ നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക",
            enterOtp: "OTP നൽകുക",
            sendOtp: "OTP അയയ്ക്കുക",
            verifyOtp: "OTP പരിശോധിക്കുക",
            pleaseEnterMobile: "നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക",
            invalidMobile: "സാധുവായ 10-അക്ക മൊബൈൽ നമ്പർ നൽകുക",
            selectedAccounts: "Selected Accounts",
            selectedAccountsSubtitle: "You have selected the following accounts to link:",
            mobileNumber: "Mobile Number:",
            editSelection: "Edit Selection",
            confirm: "Confirm"
        },
        te: {
            selectAccounts: "ఖాతాలను ఎంచుకోండి",
            selectAccountsSubtitle: "లింక్ చేయాలనుకుంటున్న ఖాతాలను ఎంచుకోండి:",
            showingAccounts: "{{count}} ఖాతాలు కనుగొనబడ్డాయి:",
            editButton: "మార్చు",
            accountsSelected: "{{selected}}/{{total}} ఖాతాలు ఎంచుకున్నారు",
            proceedButton: "కొనసాగించు",
            poweredBy: "powered by",
            savingsAccount: "సేవింగ్స్ ఖాతా",
            currentAccount: "కరెంట్ ఖాతా",
            accountNumber: "ఖాతా సంఖ్య: ",
            enterMobile: "మీ మొబైల్ నంబర్‌ను నమోదు చేయండి",
            linkAccounts: "మీ అన్ని ఖాతాలను లింక్ చేేయండి",
            mobileSubtitle: "లింక్ చేయడిన ఖాతాలను కనుగొనడానికి మీ మొ�ొబైల్ నంబర్‌ను నమోదు చేయండి",
            enterOtp: "OTP నൽకోండి",
            sendOtp: "OTP పంపండి",
            verifyOtp: "OTP ని ధృవీకరించండి",
            pleaseEnterMobile: "దయచేసి మీ మొబైల్ నంబర్‌ను నమోదు చేయండి",
            invalidMobile: "దయచేసి చెల్లుబాటు అయ్యే 10-అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి",
            selectedAccounts: "Selected Accounts",
            selectedAccountsSubtitle: "You have selected the following accounts to link:",
            mobileNumber: "Mobile Number:",
            editSelection: "Edit Selection",
            confirm: "Confirm"
        }
    };

    // Current language state
    let currentLang = 'en';

    // Function to update UI text
    function updateLanguage(lang) {
        if (!translations[lang]) {
            console.error('Translation not found for language:', lang);
            return;
        }

        currentLang = lang;
        
        // Update mobile input screen text
        const mobileScreen = document.getElementById('mobile-input-screen');
        mobileScreen.querySelector('h1').textContent = translations[lang].linkAccounts;
        mobileScreen.querySelector('p').textContent = translations[lang].mobileSubtitle;
        
        // Update input placeholders
        document.getElementById('phone-input').placeholder = translations[lang].enterMobile;
        document.getElementById('otp-input').placeholder = translations[lang].enterOtp;
        
        // Update proceed button text based on current screen and OTP state
        const proceedButton = document.querySelector('.proceed-button');
        const otpInputGroup = document.querySelector('.otp-input-group');
        const isOtpVisible = otpInputGroup && otpInputGroup.classList.contains('show');
        const isAccountScreen = document.getElementById('account-selection-screen').dataset.active === 'true';

        if (isAccountScreen) {
            proceedButton.textContent = translations[lang].proceedButton;
        } else if (isOtpVisible) {
            proceedButton.textContent = translations[lang].verifyOtp;
        } else {
            proceedButton.textContent = translations[lang].sendOtp;
        }

        // Update all text elements
        document.getElementById('page-title').textContent = translations[lang].selectAccounts;
        document.querySelector('.subtitle').textContent = translations[lang].selectAccountsSubtitle;
        
        // Update accounts discovered text
        const totalAccounts = document.querySelectorAll('.account-option').length;
        const accountsText = translations[lang].showingAccounts.replace('{{count}}', totalAccounts);
        document.querySelector('.discovered-accounts span:first-child').textContent = accountsText;
        
        // Update edit button
        document.querySelector('.edit-phone').textContent = translations[lang].editButton;
        
        // Update account types and numbers
        document.querySelectorAll('.account-option').forEach(option => {
            const typeEl = option.querySelector('.account-type');
            const numberEl = option.querySelector('.account-number');
            
            // Update account type based on original English text pattern
            if (typeEl.textContent.toLowerCase().includes('savings') || 
                typeEl.textContent.includes('बचत') || 
                typeEl.textContent.includes('സേവിംഗ്സ്') || 
                typeEl.textContent.includes('సేవింగ్స్')) {
                typeEl.textContent = translations[lang].savingsAccount;
            } else {
                typeEl.textContent = translations[lang].currentAccount;
            }
            
            // Extract account number (keeping only the digits)
            const accNum = numberEl.textContent.match(/\d+/)[0];
            numberEl.textContent = translations[lang].accountNumber + 'XXXXXXXX' + accNum;

            // Update styles for each account option based on checkbox state
            updateAccountOptionStyles(option); // Ensure styles are updated for each option
        });
        
        // Update powered by text
        document.querySelector('.powered-by span').textContent = translations[lang].poweredBy;
        
        // Update selected accounts counter
        updateSelectedCount();

        // Update confirmation screen text
        if (document.getElementById('confirmation-screen')) {
            document.getElementById('confirmation-screen').querySelector('h1')
                .textContent = translations[lang].selectedAccounts;
            document.getElementById('confirmation-screen').querySelector('.subtitle')
                .textContent = translations[lang].selectedAccountsSubtitle;
            document.querySelector('.phone-confirmation .label')
                .textContent = translations[lang].mobileNumber;
            document.querySelector('.edit-selection-btn span')
                .textContent = translations[lang].editSelection;
        }
    }

    // Initialize Lucide icons
    lucide.createIcons();

    // Cache DOM elements
    const uploadButton = document.querySelector('.upload-button');
    const fileInput = document.getElementById('logo-input');
    const colorInput = document.getElementById('color-input');
    const colorValue = document.querySelector('.color-value');
    const nameInput = document.getElementById('name-input');
    const headerLogo = document.getElementById('header-logo');
    const headerBrandName = document.getElementById('header-brand-name');
    const fontInput = document.getElementById('font-input');
    // File upload related elements
    let fileInfo, fileName, removeFileBtn;
    
    function initializeFileUpload() {
        fileInfo = document.querySelector('.file-info');
        fileName = document.querySelector('.file-name');
        removeFileBtn = document.querySelector('.remove-file');
        
        if (removeFileBtn) {
            removeFileBtn.addEventListener('click', function() {
                // Reset file input
                fileInput.value = '';
                // Reset header logo to default
                headerLogo.src = 'awebank-logo.png';
                // Hide file info
                if (fileInfo) fileInfo.style.display = 'none';
                // Reset upload button text
                uploadButton.querySelector('span').textContent = 'Upload Image';
            });
        }
    }
    
    // Initialize file upload elements
    initializeFileUpload();

    // Helper function to darken a hex color by a given percentage
    function darkenColor(hex, percent) {
        // Remove the hash symbol if present
        hex = hex.replace('#', '');

        // Convert hex to RGB
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // Calculate the darkened values
        r = Math.max(0, Math.floor(r * (100 - percent) / 100));
        g = Math.max(0, Math.floor(g * (100 - percent) / 100));
        b = Math.max(0, Math.floor(b * (100 - percent) / 100));

        // Convert back to hex and return
        return `#${[r, g, b].map(x =>x.toString(16).padStart(2, '0')).join('')}`;
    }

    // Updated updateBrandColor function
    function updateBrandColor(color) {
        // Compute a slightly darker version of the brand color (e.g., 10% darker)
        const darkenedColor = darkenColor(color, 20);// Adjust the percentage as needed

        // Update header background with a diagonal gradient using the original and darkened colors
        document.querySelector('.app-header').style.background = `linear-gradient(135deg, ${color} 0%, ${darkenedColor} 100%)`;

        // Update proceed button background
        document.querySelector('.proceed-button').style.background = 'linear-gradient(135deg, ${color} 0%, ${darkenedColor} 100%)';

        // Update link more text color
        document.querySelector('.link-more').style.color = color;

        // Update selected account styling
        const selectedAccount = document.querySelector('.account-option.selected');
        if (selectedAccount) {
            selectedAccount.style.borderColor = color; // Set border color for selected state
            
            // Create a transparent version of the color (5% opacity)
            const rgb = hexToRGB(color);
            selectedAccount.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`;
        }

        // Update checkbox color
        document.querySelectorAll('.checkbox-checkmark .checked').forEach(checkbox => {
            checkbox.style.color = color;
        });
    }

    // Helper function to convert hex to RGB
    function hexToRGB(hex) {
        // Remove # if present
        hex = hex.replace('#', '');
        
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return { r, g, b };
    }

    // Handle file upload
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                headerLogo.src = e.target.result;
                // Show file info if elements exist
                if (fileName && fileInfo) {
                    fileName.textContent = file.name;
                    fileInfo.style.display = 'flex';
                }
                // Update upload button text
                uploadButton.querySelector('span').textContent = 'Replace Logo';
            };
            
            reader.readAsDataURL(file);
        }
    });

    // Handle color changes
    colorInput.addEventListener('input', function(e) {
        const color = e.target.value;
        // Update color input value display
        colorValue.textContent = color.toUpperCase();
        
        // Convert hex to RGB
        const rgb = hexToRGB(color);
        
        // Set CSS variables
        document.documentElement.style.setProperty('--brand-color', color);
        document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
        
        // Update UI elements
        updateBrandColor(color);
    });

    // Handle brand name changes
    nameInput.addEventListener('input', function(e) {
        const brandName = e.target.value || 'Awesome Bank';
        headerBrandName.textContent = brandName;
        document.getElementById('page-title').textContent = 'Select Accounts';
    });

    // Function to update styles of account options based on checkbox state
    function updateAccountOptionStyles(bankSection) {
        const accountOptions = bankSection.querySelectorAll('.account-option');
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                option.classList.add('selected');
                option.style.borderColor = color; // Set border color for selected state
                
                // Create a transparent version of the color (5% opacity)
                const rgb = hexToRGB(color);
                option.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`; // Set background for selected state
            } else {
                option.classList.remove('selected');
                option.style.borderColor = ''; // Reset border color for unselected state
                option.style.backgroundColor = ''; // Reset background for unselected state
            }
        });
    }

    // Handle account selection
    document.querySelectorAll('.account-option').forEach(option => {
        option.addEventListener('click', function(e) {
            // Prevent event from bubbling
            e.preventDefault();
            e.stopPropagation();
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;  // Toggle checkbox state

            // Apply styles immediately based on the checkbox state
            updateAccountOptionStyles(this);
            
            updateSelectedCount();
        });
    });

    // Initialize styles for checkboxes on page load
    document.querySelectorAll('.account-option').forEach(option => {
        updateAccountOptionStyles(option); // Ensure styles are applied based on initial checkbox state
    });

    // Initialize with default color
    const defaultColor = '#468584';
    colorInput.value = defaultColor;
    colorValue.textContent = defaultColor;
    document.documentElement.style.setProperty('--brand-color', defaultColor);
    const rgb = hexToRGB(defaultColor);
    document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    updateBrandColor(defaultColor);

    // List of Google Fonts (you can expand this)
    const googleFonts = [
        'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 
        'Raleway', 'Nunito', 'Source Sans Pro', 'Ubuntu', 'Roboto Condensed', 
        'Oswald', 'Roboto Mono', 'Mukta', 'Noto Sans', 'PT Sans', 'Work Sans', 
        'Merriweather', 'Rubik', 'Noto Sans JP', 'Playfair Display', 'Quicksand', 
        'Noto Serif', 'Fira Sans', 'Barlow', 'DM Sans', 'Mulish', 'Heebo', 
        'IBM Plex Sans', 'Manrope', 'Nanum Gothic', 'Karla', 'Josefin Sans', 
        'Source Code Pro', 'Arimo', 'Oxygen', 'Hind Siliguri', 'Dosis', 
        'Space Grotesk', 'Crimson Text', 'Libre Franklin', 'Bitter', 'Prompt', 
        'Titillium Web', 'PT Serif', 'Libre Baskerville', 'Inconsolata', 
        'Assistant', 'Abel', 'Archivo', 'Cabin', 'Maven Pro', 'Catamaran'
    ].sort();

    // Initialize with Inter as default font
    document.documentElement.style.setProperty('--selected-font', 'Inter');
    
    // Font selection handler
    const fontSelect = document.getElementById('font-input');
    if (!fontSelect) return; // Guard clause if element doesn't exist

    // Load all fonts using WebFontLoader
    WebFont.load({
        google: {
            families: [
                'Inter:400,500,600',
                'Abel', 'Archivo', 'Arimo', 'Assistant', 'Barlow', 'Bitter', 
                'Cabin', 'Catamaran', 'Crimson Text', 'DM Sans', 'Dosis', 
                'Fira Sans', 'Heebo', 'Hind Siliguri', 'IBM Plex Sans', 
                'Inconsolata', 'Josefin Sans', 'Karla', 'Lato', 
                'Libre Baskerville', 'Libre Franklin', 'Manrope', 'Maven Pro', 
                'Merriweather', 'Montserrat', 'Mukta', 'Mulish', 'Nanum Gothic', 
                'Noto Sans', 'Noto Sans JP', 'Noto Serif', 'Nunito', 'Open Sans', 
                'Oswald', 'Oxygen', 'PT Sans', 'PT Serif', 'Playfair Display', 
                'Poppins', 'Prompt', 'Quicksand', 'Raleway', 'Roboto', 
                'Roboto Condensed', 'Roboto Mono', 'Rubik', 'Source Code Pro', 
                'Source Sans Pro', 'Space Grotesk', 'Titillium Web', 'Ubuntu', 
                'Work Sans'
            ]
        },
        active: function() {
            // Apply default font after fonts are loaded
            applyFont('Assistant');
            console.log('Fonts loaded');
        }
    });

    // Function to apply font to all elements
    function applyFont(selectedFont) {
        // Update CSS variable with full font stack
        document.documentElement.style.setProperty('--brand-font', 
            `"${selectedFont}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`);
    }

    // Update font when selection changes
    fontSelect.addEventListener('change', function(e) {
        const selectedFont = this.value || 'Inter';
        applyFont(selectedFont);
    });

    // Helper function to convert hex to rgba
    function hexToRGBA(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Add this after your existing account selection code
    function updateSelectedCount() {
        const selectedCount = document.querySelectorAll('.account-option input[type="checkbox"]:checked').length;
        const totalCount = document.querySelectorAll('.account-option').length;
        const pill = document.querySelector('.accounts-counter .pill');
        const prevCount = parseInt(pill.querySelector('.pill-number-animate')?.textContent || '0');
        
        // Determine animation direction based on count change
        const animationClass = selectedCount > prevCount ? 'slide-from-bottom' : 'slide-from-top';
        
        // Create animated wrapper for the number
        const countText = `${selectedCount}/${totalCount} accounts selected`;
        
        // Split the text to animate only the first number
        const [number, ...rest] = countText.split('/');
        pill.innerHTML = `
            <span class="pill-number-animate ${animationClass}">${number.trim()}</span>/${rest.join('')}
        `;
    }

    // Initialize counter
    updateSelectedCount();

    // Get the main content and scroll indicator elements
    const mainContent = document.querySelector('.main-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Function to check scroll position and update indicator
    function updateScrollIndicator() {
        // Check if we're at the bottom of scrollable content
        const isAtBottom = mainContent.scrollHeight - mainContent.scrollTop <= mainContent.clientHeight + 1;
        
        // Toggle visibility based on scroll position
        if (isAtBottom) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateY(100%)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateY(0)';
            
        }
    }

    // Add scroll event listener
    mainContent.addEventListener('scroll', updateScrollIndicator);

    // Initial check
    updateScrollIndicator();

    // Get the dropdown elements
    const langBtn = document.querySelector('.lang-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
        console.log('Dropdown toggled'); // Debug log
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const newLang = this.dataset.lang;
            console.log('Selected language:', newLang); // Debug log
            
            // Update selected states
            langOptions.forEach(opt => {
                opt.setAttribute('data-selected', opt.dataset.lang === newLang);
            });
            
            updateLanguage(newLang);
            dropdownContent.classList.remove('show');
        });
    });

    // Initialize with default language
    updateLanguage('en');

    // Add this function to handle select all functionality
    function handleSelectAll(bankSection) {
        const selectAllButton = bankSection.querySelector('.select-all');
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const allSelected = Array.from(accountOptions).every(option => option.querySelector('input[type="checkbox"]').checked);

        // Toggle selection state
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            checkbox.checked = !allSelected; // If all are selected, uncheck; otherwise, check
            updateAccountOptionStyles(option); // Update styles based on new state
        });

        // Update button text
        selectAllButton.textContent = allSelected ? 'Select All' : 'Unselect All';
    }

    // Attach event listener to each "Select All" button
    document.querySelectorAll('.bank-section').forEach(bankSection => {
        const selectAllButton = bankSection.querySelector('.select-all');
        selectAllButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default button behavior
            handleSelectAll(bankSection); // Call the function to handle select all
            updateSelectedCount(); // Update the selected count display
        });
    });

    // Initialize the select all button text based on the default state of checkboxes
    document.querySelectorAll('.bank-section').forEach(bankSection => {
        const selectAllButton = bankSection.querySelector('.select-all');
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const allSelected = Array.from(accountOptions).every(option => option.querySelector('input[type="checkbox"]').checked);

        // Set the button text to "Unselect All" if all checkboxes are checked
        selectAllButton.textContent = allSelected ? 'Unselect All' : 'Select All';
    });

    // Screen Management
    const phoneInput = document.getElementById('phone-input');
    const proceedButton = document.querySelector('.proceed-button');
    const mobileScreen = document.getElementById('mobile-input-screen');
    const accountScreen = document.getElementById('account-selection-screen');
    let currentScreen = 'mobile-input-screen';

    // Set initial button text
    proceedButton.textContent = translations[currentLang].sendOtp;
    proceedButton.disabled = true;  // Initially disabled until phone number is entered

    // Phone input validation with disabled button logic
    phoneInput.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/\D/g, '');
        
        // Remove any existing error
        removeError(this);
        
        // Enable/disable proceed button based on input length
        proceedButton.disabled = this.value.length !== 10;
    });

    // Get the back button reference
    const backButton = document.querySelector('.back-btn');

    // Hide back button initially since we start on the first screen
    backButton.style.visibility = 'hidden';
    backButton.style.opacity = '0';

    

    const poweredBy = document.querySelector('.powered-by');
    poweredBy.style.visibility = 'hidden';
    poweredBy.style.opacity = '0';

    // Function to hide OTP input with animation
    function hideOtpInput() {
        const otpInputGroup = document.querySelector('.otp-input-group');
        const otpInput = document.getElementById('otp-input');
        
        // First remove the show class to trigger animation
        otpInputGroup.classList.remove('show');
        
        // Wait for animation to complete before hiding completely
        setTimeout(() => {
            otpInputGroup.style.display = 'none';
            otpInput.value = ''; // Reset OTP input value
        }, 300); // Match this with your transition duration
    }

    // Function to switch screens with direction-aware animation
    function switchScreen(fromScreen, toScreen, isForward = true) {
        // First, start the exit animation
        fromScreen.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
        
        setTimeout(() => {
            // After exit animation completes
            fromScreen.dataset.active = 'false';
            fromScreen.classList.remove(isForward ? 'slide-out-left' : 'slide-out-right');
            
            // Show the new screen and start entrance animation
            toScreen.style.display = 'block';
            toScreen.dataset.active = 'true';
            toScreen.classList.add(isForward ? 'slide-in-right' : 'slide-in-left');

            
            // Clean up entrance animation
            setTimeout(() => {
                toScreen.classList.remove(isForward ? 'slide-in-right' : 'slide-in-left');
                
                // Scroll the main content to the top
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
                }

            }, 300); // Match this with your transition duration
        }, 300);
    }

    // Update proceed button click handler (going forward)
    proceedButton.addEventListener('click', function() {
        if (currentScreen === 'mobile-input-screen') {
            // Validate phone number before showing OTP input
            if (!phoneInput.value) {
                showError(phoneInput, 'pleaseEnterMobile');
                return;
            }
            
            if (!isValidIndianMobileNumber(phoneInput.value)) {
                showError(phoneInput, 'invalidMobile');
                return;
            }

            // If validation passes and OTP input is not yet shown, show it
            const otpInputGroup = document.querySelector('.otp-input-group');
            if (!otpInputGroup.classList.contains('show')) {
                otpInputGroup.style.display = 'flex';
                otpInputGroup.offsetHeight; // Force reflow
                otpInputGroup.classList.add('show');
                // Use translations for button text
                this.textContent = translations[currentLang].verifyOtp;
                this.disabled = true;
                return;
            }

            // If OTP is shown and entered
            const otpInput = document.getElementById('otp-input');
            if (otpInput.value.length === 6) {
                const mobileScreen = document.getElementById('mobile-input-screen');
                const accountScreen = document.getElementById('account-selection-screen');
                
                // Add exit animation to mobile screen
                mobileScreen.classList.add('slide-out-left');
                
                // After exit animation completes, switch screens
                setTimeout(() => {
                    mobileScreen.dataset.active = 'false';
                    mobileScreen.classList.remove('slide-out-left');
                    
                    // Show and animate account screen
                    accountScreen.style.display = 'block';
                    accountScreen.dataset.active = 'true';
                    accountScreen.classList.add('slide-in-right');
                    
                    // Clean up entrance animation
                    setTimeout(() => {
                        accountScreen.classList.remove('slide-in-right');
                    }, 300);
                    
                    
                    // Show back button
                    const backButton = document.querySelector('.back-btn');
                    backButton.style.visibility = 'visible';
                    backButton.style.opacity = '1';

                    const poweredBy = document.querySelector('.powered-by');
                    poweredBy.style.visibility = 'visible';
                    poweredBy.style.opacity = '1';
                    
                    // Update current screen tracker
                    currentScreen = 'account-selection-screen';

                    
                    
                    // Use translations for button text
                    this.textContent = translations[currentLang].proceedButton;
                    
                    // Update phone number display
                    const phoneDisplay = document.querySelector('.phone-number');
                    const maskedNumber = phoneInput.value.replace(/(\d{6})(\d{4})/, 'XXXXXX$2');
                    phoneDisplay.innerHTML = `+91 ${maskedNumber}<button class="edit-phone">edit</button>`;
                }, 300);
            }
        } else if (currentScreen === 'account-selection-screen') {
            // Get selected accounts
            const selectedAccounts = Array.from(document.querySelectorAll('.account-option input[type="checkbox"]:checked'))
                .map(checkbox => {
                    const accountOption = checkbox.closest('.account-option');
                    const bankSection = accountOption.closest('.bank-section');
                    const bankInfo = bankSection.querySelector('.bank-info');
                    return {
                        bankName: bankInfo.querySelector('span').textContent,
                        bankLogo: bankInfo.querySelector('img').src,
                        type: accountOption.querySelector('.account-type').textContent,
                        number: accountOption.querySelector('.account-number').textContent
                    };
                });

            if (selectedAccounts.length === 0) {
                alert('Please select at least one account to proceed');
                return;
            }

            // Populate confirmation screen
            const confirmedPhone = document.querySelector('.confirmed-phone');
            confirmedPhone.textContent = `+91 ${phoneInput.value.replace(/(\d{6})(\d{4})/, 'XXXXXX$2')}`;

            const accountsList = document.querySelector('.selected-accounts-list');
            accountsList.innerHTML = selectedAccounts.map(account => `
                <div class="selected-account-item">
                    <img src="${account.bankLogo}" alt="${account.bankName}" class="bank-logo-small">
                    <div class="selected-account-details">
                        <div class="selected-bank-name">${account.bankName}</div>
                        <div class="selected-account-type">${account.type}</div>
                        <div class="selected-account-number">${account.number}</div>
                    </div>
                </div>
            `).join('');

            // Switch to confirmation screen
            switchScreen(
                document.getElementById('account-selection-screen'),
                document.getElementById('confirmation-screen'),
                true
            );
            currentScreen = 'confirmation-screen';
            currentScreen.a
            
            // Update button text
            this.textContent = translations[currentLang].confirm;
        } else if (currentScreen === 'confirmation-screen') {
            // Handle final confirmation
            console.log('Proceeding with selected accounts...');
            // Add your final submission logic here
        }
    });

    // Update back button handler (going backward)
    backButton.addEventListener('click', function() {
        if (currentScreen === 'confirmation-screen') {
            // Navigate back to Account Selection Screen
            const confirmationScreen = document.getElementById('confirmation-screen');
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            switchScreen(confirmationScreen, accountSelectionScreen, false); // backward direction
            currentScreen = 'account-selection-screen';
            proceedButton.textContent = translations[currentLang].proceedButton;
        }
        else if (currentScreen === 'account-selection-screen') {
            // Navigate back to Mobile Input Screen
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            const mobileInputScreen = document.getElementById('mobile-input-screen');
            switchScreen(accountSelectionScreen, mobileInputScreen, false); // backward direction
            currentScreen = 'mobile-input-screen';
            proceedButton.textContent = translations[currentLang].sendOtp;
            // Hide OTP input
            hideOtpInput();
            // Hide back button
            backButton.style.visibility = 'hidden';
            backButton.style.opacity = '0';

            const poweredBy = document.querySelector('.powered-by');
            poweredBy.style.visibility = 'hidden';
            poweredBy.style.opacity = '0';
        }
        // Optionally, handle other screens if any
    });

    // Update edit phone click handler (going backward)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-phone')) {
            // Switch screens with backward animation
            switchScreen(
                document.getElementById('account-selection-screen'),
                document.getElementById('mobile-input-screen'),
                false // backward direction
            );
            currentScreen = 'mobile-input-screen';
            
            // Update proceed button text using translations
            proceedButton.textContent = translations[currentLang].sendOtp;
            proceedButton.disabled = phoneInput.value.length !== 10;

            // Hide OTP input
            hideOtpInput();

            // Hide back button
            backButton.style.visibility = 'hidden';
            backButton.style.opacity = '0';
            
        }
    });

    // Update the showError function to use translations
    function showError(input, messageKey) {
        removeError(input); // Remove any existing error first
        
        const errorMessage = translations[currentLang][messageKey];
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        
        // Add error styles to input group (not just the input)
        const inputGroup = input.closest('.phone-input-group, .otp-input-group');
        if (inputGroup) {
            inputGroup.classList.add('error');
        }
        
        // Insert error message after the input group
        inputGroup.insertAdjacentElement('afterend', errorDiv);
    }

    function removeError(input) {
        // Remove error class from input group
        const inputGroup = input.closest('.phone-input-group, .otp-input-group');
        if (inputGroup) {
            inputGroup.classList.remove('error');
        }
        
        // Remove error message if it exists
        const errorMessage = inputGroup.nextElementSibling;
        if (errorMessage && errorMessage.className === 'error-message') {
            errorMessage.remove();
        }
    }

    // Add this function before the event listeners
    function isValidIndianMobileNumber(number) {
        // Check if the number:
        // 1. Is exactly 10 digits
        // 2. Starts with 6, 7, 8, or 9
        // 3. Contains only numbers
        const indianMobileRegex = /^[6-9]\d{9}$/;
        return indianMobileRegex.test(number);
    }

    // Remove any errors when user starts typing
    phoneInput.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/\D/g, '');
        removeError(this);
        
        // Enable/disable proceed button based on input length
        proceedButton.disabled = this.value.length !== 10;
    });

    // Add OTP input validation
    const otpInput = document.getElementById('otp-input');
    otpInput.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/\D/g, '');
        
        // Enable proceed button only when exactly 6 digits are entered
        proceedButton.disabled = this.value.length !== 6;
    });

    // Add this to ensure button is disabled when OTP input is cleared
    otpInput.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            proceedButton.disabled = true;
        }
    });

    // Add handler for edit selection button
    document.querySelector('.edit-selection-btn').addEventListener('click', function() {
        const confirmationScreen = document.getElementById('confirmation-screen');
        const accountSelectionScreen = document.getElementById('account-selection-screen');
        switchScreen(confirmationScreen, accountSelectionScreen, false);
        currentScreen = 'account-selection-screen';
        proceedButton.textContent = translations[currentLang].proceedButton;

    });

    // 1. Define Keyframes for the Pulse Animation
    const pulseKeyframes = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    `;

    // 2. Inject the Keyframes into the Document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = pulseKeyframes;
    document.head.appendChild(styleSheet);

    // 3. Apply the Animation to the Header Image
    const headerImage = document.getElementById('header-image');
    headerImage.style.animation = "pulse 2s infinite ease-in-out";

    // Optional: Adjust the animation duration and easing as desired
    // For example, a slower pulse:
    // headerImage.style.animation = "pulse 5s infinite ease-in-out";

    function activateMobileInputScreen() {
        const mobileScreen = document.getElementById('mobile-input-screen');
        switchScreen(currentScreenElement, mobileScreen, true);
        currentScreenElement = mobileScreen;
    }
});